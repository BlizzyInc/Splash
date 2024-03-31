import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import BarIcon from '../components/BarIcon';
import UserIcon from '../assets/UserIcon';
import TimeIcon from '../assets/TimeIcon';
import FriendsIcon from '../assets/FriendsIcon';
import ShopIcon from '../assets/ShopIcon';
import Water1 from '../assets/Water1';
import Water2 from '../assets/Water2';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    barIconContainer: {
        position: 'absolute',
        top: 10,
        left: 30,
    },
    userIconContainer: {
        position: 'absolute',
        top: 50,
       
    },
    rectangle: {
        alignItems: 'center',
        width: 269,
        height: 98,
        top: 90,
        backgroundColor: '#578DB7',
        borderRadius: 20,
    },
    smallRectangleContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 213,
    },
    smallRectangle: {
        width: 150,
        height: 50,
        backgroundColor: '#578DB7',
        borderRadius: 20,
        marginLeft: 10,
    },
    ShopIconContainer: {
        position: 'absolute',
        top: 5, 
        left: 10,
        opacity: 0.7,
    },
    FriendsIconContainer: {
        position: 'absolute',
        top: 5, 
        left: 10,
    },
    longRectangle: {
        position: 'absolute',
        width: 312,
        height: 50,
        left: 44,
        top: 288, 
        backgroundColor: '#578DB7',
        borderRadius: 20,
    },
    timeIconContainer: {
        position: 'absolute',
        top: 5, 
        left: 10,
        opacity: 0.7,
    },
    text1: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
        color: '#FFFFFF',
        top: 35,
      },
    rectangleText: {
        position: 'absolute',
        top: 16,
        left: '73%',
        transform: [{ translateX: -50 }],
        color: '#FFFFFF',
        fontSize: 14,
      },
    longRectangleText: {
        position: 'absolute',
        top: 16,
        left: 60, 
        color: '#FFFFFF',
        fontSize: 14,
    },
    line: {
        position: 'absolute',
        width: 390,
        height: 1,
        top: 365,
        backgroundColor: '#FFFFFF',
    },
    textContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 400,
    },
    text2: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
        color: '#FFFFFF',
        marginHorizontal: 40,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7,
        top: 252,
        
    },
    icon: {
        marginHorizontal: 35,
    },
    waterContainer: {
        position: 'absolute',
        top: 366,
    },

});

interface ProfileScreenProps {
  navigation: any;
}

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  return (
    <View style={styles.container}>
        <View style={styles.barIconContainer}>
            <BarIcon navigation={navigation} />
        </View>
        <View style={styles.rectangle} />
        <View style={styles.userIconContainer}>
            <UserIcon />
        </View>
        <Text style={styles.text1}>Splash</Text>
        <Text style={styles.text1}>splash@gmail.com</Text>
  
        <View style={styles.smallRectangleContainer}>
            <View style={styles.smallRectangle}>
                <Text style={styles.rectangleText}>1186 coins</Text>
                <View style={styles.ShopIconContainer}>
                    <ShopIcon />
                </View>
            </View>
    
        <View style={styles.smallRectangle}>
            <Text style={styles.rectangleText}>28 friends</Text>
            <View style={styles.FriendsIconContainer}>
                <FriendsIcon />
            </View>
        </View>
    </View>
  
    <View style={styles.longRectangle}>
        <Text style={styles.longRectangleText}>5 days 3 hours 16 mins</Text>
        <View style={styles.timeIconContainer}>
            <TimeIcon />
        </View>
    </View>
  
  <View style={styles.line} />
  {/* Water Container */}
  <View style={styles.waterContainer}>
    <Water2 />
    <Water1 />
  </View>
  
  {/* Text Container */}
  <View style={styles.textContainer}>
    <Text style={styles.text2}>Today</Text>
    <Text style={styles.text2}>125</Text>
    <Text style={styles.text2}>120 mins</Text>
  </View>
  
  {/* Icon Container */}
  <View style={styles.iconContainer}>
    <ShopIcon style={styles.icon} />
    <TimeIcon style={styles.icon} />
  </View>
  
  
</View>


  );
}
