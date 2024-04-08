import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {inputStyles} from '../../styles/inputStyles';

interface EmailPasswrodInputProps {
  isSignUp: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUserName: (userName: string) => void;
}
export default function EmailPasswrodInput({
  isSignUp,
  setEmail,
  setPassword,
  setUserName,
}: EmailPasswrodInputProps) {
  const [visibility, setVisibility] = useState(false);
  const [visibilityIcon, setVisibilityIcon] = useState('visibility-off');
  useEffect(() => {
    setVisibilityIcon(visibility ? 'visibility' : 'visibility-off');
  }, [visibility]);
  return (
    <View style={inputStyles.container}>
      {isSignUp && (
        <View style={inputStyles.textInputWithLabel}>
          <Text style={inputStyles.inputText}>User Name</Text>
          <View style={inputStyles.input}>
            <Icon name="mail-outline" size={24} color="#858484" />
            <TextInput
              autoCorrect={false}
              textContentType="name"
              style={{flex: 1}}
              onChangeText={text => setUserName(text)}
            />
          </View>
        </View>
      )}
      <View style={inputStyles.textInputWithLabel}>
        <Text style={inputStyles.inputText}>Email</Text>
        <View style={inputStyles.input}>
          <Icon name="mail-outline" size={24} color="#858484" />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            style={{flex: 1}}
            onChangeText={text => setEmail(text)}
          />
        </View>
      </View>
      <View style={inputStyles.textInputWithLabel}>
        <Text style={inputStyles.inputText}>Password</Text>
        <View style={inputStyles.input}>
          <Icon
            onPress={() => {
              setVisibility(!visibility);
            }}
            name="lock-outline"
            size={24}
            color="#858484"
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={!visibility}
            textContentType="password"
            style={{flex: 1}}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setVisibility(!visibility)}>
            <Icon name={visibilityIcon} size={24} color="#858484" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
