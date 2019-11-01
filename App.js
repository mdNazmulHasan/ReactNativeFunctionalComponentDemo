/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Business from './src/screen/Business';
import Offer from './src/screen/Offer';
import BusinessIcon from './assets/business/business.png';
import OfferIcon from './assets/offer/offer.png';

const BusinessTab = createStackNavigator(
  {
    Business: {
      screen: Business,
    },
  },
  {
    initialRoute: 'Business',
  },
);
const OfferTab = createStackNavigator({
  Offer: Offer,
});

const App = createBottomTabNavigator(
  {
    Business: BusinessTab,
    Offer: OfferTab,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: () => {
        const {routeName} = navigation.state;
        if (routeName === 'Business') {
          return <Image source={BusinessIcon} />;
        } else {
          return <Image source={OfferIcon} />;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  },
);

export default createAppContainer(App);
