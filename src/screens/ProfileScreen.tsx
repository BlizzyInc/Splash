import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import BarIcon from '../components/BarIcon';
import UserIcon from '../assets/UserIcon';
import TimeIcon from '../assets/TimeIcon';
import FriendsIcon from '../assets/FriendsIcon';
import ShopIcon from '../assets/ShopIcon';
import Water1 from '../assets/Water1';
import Water2 from '../assets/Water2';
import {useUserDetails} from '../context/UserDetails';
import {useDailyStats} from '../context/DailyStats';
import friends from '../assets/FriendsIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  barIconContainer: {
    flex: 0,
    alignSelf: 'flex-start', 
    marginVertical: '2.5%', 
    marginHorizontal: '7.5%', 
  },
  userIconContainer: {
    marginTop: '-35%',
  },
  rectangle: {
    width: '70%',
    marginTop: '10%', 
    aspectRatio: 2.69, 
    backgroundColor: '#578DB7',
    borderRadius: 20,
  },
  text1: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '2%', 
  },
  smallRectangleContainer: {
    flexDirection: 'row',
    marginTop: '10%',
  },
  smallRectangle: {
    flex: 0.41,
    marginHorizontal: '2%', 
    backgroundColor: '#578DB7',
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleText: {
    color: '#FFFFFF',
    fontSize: 14,
    position: 'absolute',
    left: '75%',
    transform: [{ translateX: -50 }],
  }, 
  longRectangle: {
    width: '80%', 
    height: 50,
    marginTop: '5%', 
    backgroundColor: '#578DB7',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  longRectangleText: {
    color: '#FFFFFF',
    fontSize: 14,
    top: '20%',
    marginLeft: '20%',
    transform: [{ translateX: -50 }],
  },

  ShopIconContainer: {
    position: 'relative',
    marginTop: '2%', 
    marginLeft: '-55%', 
    opacity: 0.7,
  },
  FriendsIconContainer: {
    position: 'relative',
    marginTop: '1%', 
    marginLeft: '-60%', 
  },
  timeIconContainer: {
    position: 'relative',
    marginTop: '-6%', 
    marginLeft: '-80%',
    opacity: 0.7, 
  },
  line: {
    width: '100%', 
    height: 1,
    backgroundColor: '#FFFFFF',
    marginTop: '8%', 
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: '5%', 
  },
  text2: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 15,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: '10%',
    marginVertical: '-7%', 
    opacity: 0.85, 
  },
  waterContainer: {
    flexDirection: 'column',
    marginTop: '-10%',
    zIndex: -1,
  },
  
});

interface ProfileScreenProps {
  navigation: any;
}

export default function ProfileScreen({navigation}: ProfileScreenProps) {
  const {userName, email, coins, numberOfFriends, totalTimeString} =
    useUserDetails();
  const {dailyCoins, dailyMinutes} = useDailyStats();
  return (
    <View style={styles.container}>
      <View style={styles.barIconContainer}>
        <BarIcon navigation={navigation} />
      </View>
      
      <View style={styles.rectangle} />
      <View style={styles.userIconContainer}>
        <UserIcon />
      </View>
      <Text style={styles.text1}>{userName}</Text>
      <Text style={styles.text1}>{email}</Text>

      <View style={styles.smallRectangleContainer}>
        <View style={styles.smallRectangle}>
          <Text style={styles.rectangleText}>{coins} coins</Text>
          <View style={styles.ShopIconContainer}>
            <ShopIcon />
          </View>
        </View>

        <View style={styles.smallRectangle}>
          <Text style={styles.rectangleText}>{numberOfFriends} friends</Text>
          <View style={styles.FriendsIconContainer}>
            <FriendsIcon />
          </View>
        </View>
      </View>

      <View style={styles.longRectangle}>
        <Text style={styles.longRectangleText}>{totalTimeString}</Text>
        <View style={styles.timeIconContainer}>
          <TimeIcon />
        </View>
      </View>
      <View style={styles.line} />

      <View style={styles.textContainer}>
        <Text style={styles.text2}>Today</Text>
        <Text style={styles.text2}>{dailyCoins}</Text>
        <Text style={styles.text2}>{dailyMinutes} mins</Text>
      </View>

      <View style={styles.iconContainer}>
        <ShopIcon style={styles.icon} />
        <TimeIcon style={styles.icon} />
      </View>

      <View style={styles.waterContainer}>
        <Water2 />
        <Water1 />
      </View>
    </View> 
  );
}
