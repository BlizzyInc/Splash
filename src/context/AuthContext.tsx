import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUserDetails} from './UserDetails';
import {z} from 'zod';
interface AuthContextProps {
  user: FirebaseAuthTypes.User | null;
  loading: boolean;
  signInWithFacebook: () => Promise<void>;
  signOut: () => Promise<void>;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleSignUp: (
    email: string,
    password: string,
    userName: string,
  ) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  signInWithFacebook: async () => {},
  signOut: async () => {},
  handleLogin: async () => {},
  handleSignUp: async () => {},
});

export const useAuthContext = (): AuthContextProps => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type User = z.infer<typeof loginSchema>;

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const {setUserName, setEmail} = useUserDetails();

  type LoginProps = {
    email: string;
    password: string;
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async authUser => {
      setUser(authUser);
      setLoading(false);

      if (authUser) {
        // Store the user's authentication state
        await AsyncStorage.setItem('user', JSON.stringify(authUser));
      } else {
        // Remove the stored user's authentication state
        await AsyncStorage.removeItem('user');
      }
    });

    // Retrieve the stored user's authentication state on app launch
    const getStoredUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setUser(user);
        setUserName(user.displayName || '');
        setEmail(user.email || '');
      }
      setLoading(false);
    };

    getStoredUser();

    return () => unsubscribe();
  }, []);

  const signInWithFacebook = async (): Promise<void> => {
    try {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw new Error('User cancelled the login process');
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw new Error('Something went wrong obtaining access token');
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      await auth().signInWithCredential(facebookCredential);
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
      // Handle sign-in error, display error message, etc.
    }
  };

  // Function to handle user login
  const handleLogin = async (email: string, password: string) => {
    try {
      loginSchema.parse({email, password});
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      // Login successful, do something with the userCredential
      console.log('User logged in:', userCredential.user);
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error
    }
  };

  // Function to handle user sign up
  const handleSignUp = async (
    email: string,
    password: string,
    userName: string,
  ) => {
    try {
      loginSchema.parse({email, password});
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      userCredential.user.updateProfile({
        displayName: userName,
      });
      // Sign up successful, do something with the userCredential
      console.log('User signed up:', userCredential.user);
      setUser(userCredential.user);
      setUserName(userCredential.user.displayName || userName);
      setEmail(userCredential.user.email || '');
    } catch (error) {
      console.error('Sign up failed:', error);

      // Handle sign up error
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      await auth().signOut();
      console.log('User signed out');
      // Handle successful sign-out, navigate to the login screen, etc.
    } catch (error) {
      console.error('Error signing out:', error);
      // Handle sign-out error, display error message, etc.
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signInWithFacebook,
        signOut,
        handleLogin,
        handleSignUp,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
