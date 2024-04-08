import firestore from '@react-native-firebase/firestore';

const updateUserData = async (uid: string, data: any) => {
    try {
        const userRef = firestore().collection('users').doc(uid);
        const document = await userRef.get();
        if (document.exists) {
            await userRef.update(data);
        } else {
            await userRef.set(data);
        }
    } catch (error) {
        console.error('Error updating document: ', error);
    }
}

const getUserData = async (uid: string) => {
    try {
        const userRef = firestore().collection('users').doc(uid);
        const document = await userRef.get();
        if (document.exists) {
            return document.data();
        }
    } catch (error) {
        console.error('Error getting document: ', error);
    }
}

const updateTime = async (uid: string, time: number) => {
    // add time in minutes to the user's total time

    try {
        const data = await getUserData(uid);
        const userRef = firestore().collection('users').doc(uid);
        const document = await userRef.get();
        if (document.exists) {
            await userRef.update({totalTime:((data!.time||0)+time)});
        } else {
            await userRef.set({totalTime:time});
        }
    } catch (error) {
        console.error('Error updating document: ', error);
    }
}

const getDailyTime = async (uid: string) => {
    const currentTimestamp = Date.now();
    const startTimestamp = currentTimestamp - 24 * 60 * 60 * 1000; // 24 hours ago
    // get the user's total time for the day
    try {
        const timeRef = firestore().collection('users').doc(uid);
        const document = await timeRef.get();
        
    } catch (error) {
        console.error('Error getting daily time: ', error);
    }
}

const getDailyCoinsEarned = async (userId:string) => {
    const currentTimestamp = Date.now();
    const startTimestamp = currentTimestamp - 24 * 60 * 60 * 1000; // 24 hours ago
  
    const userCoinsRef = firestore().collection('users').doc(userId);
  
    try {
      const snapshot = await userCoinsRef
        .collection('coins')
        .where('timestamp', '>=', startTimestamp)
        .where('timestamp', '<=', currentTimestamp)
        .orderBy('timestamp')
        .get();
  
      let startCoins = 0;
      let endCoins = 0;
  
      snapshot.forEach((doc) => {
        const { timestamp, coins } = doc.data();
  
        if (timestamp === startTimestamp) {
          startCoins = coins;
        }
        if (timestamp === currentTimestamp) {
          endCoins = coins;
        }
      });
  
      const coinsEarned = endCoins - startCoins;
      return coinsEarned;
    } catch (error) {
      console.log('Error fetching daily coins earned:', error);
      return 0;
    }
  };
  

export {updateUserData, getUserData, updateTime};