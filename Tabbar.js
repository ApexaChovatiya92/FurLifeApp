import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet} from 'react-native';
import Home from './Home';
import FurYou from './FurYou';
import MileStones from './MileStones';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused) => {
    let iconSource;
  
    switch (route.name) {
      case 'Home':
        iconSource = require('./home.png');
        break;
      case 'Fur You':
        iconSource = require('./paw.png');
        break;
      case 'MileStones':
        iconSource = require('./heart.png');
        break;
      case 'Profile':
        iconSource = require('./calendar.png');
        break;
      default:
        iconSource = require('./home.png');
        break;
    }
  
    return (
      <Image
        source={iconSource}
        style={[
          styles.icon,
          { tintColor: focused ? '#006C97' : 'gray' }
        ]}
      />
    );
};
  
const Tabbar = () => {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => getTabBarIcon(route, focused),
          })}
          tabBarOptions={{
            activeTintColor: '#006C97',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Fur You" component={FurYou} />
          <Tab.Screen name="MileStones" component={MileStones} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
  }
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

export default Tabbar;