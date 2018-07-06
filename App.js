import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
   Container,
   Header,
   Title,
   Content,
   Button,
   Left,
   Right,
   Body,
   Icon,
} from 'native-base';
import { createStackNavigator } from 'react-navigation';

import SpellList from './screens/SpellList'
import SpellDetails from './screens/SpellDetails'

const RootStack = createStackNavigator(
   {
      Home: SpellList,
      SpellDetails: SpellDetails
   },
   {
      initialRouteName: 'Home'
   }
);


class App extends Component {
   state = {
      isReady: false,
   }

   async componentWillMount() {
      await Expo.Font.loadAsync({
         'Roboto': require('native-base/Fonts/Roboto.ttf'),
         'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
      this.setState({ isReady: true });
   }

   render() {
      if (!this.state.isReady)
         return <Expo.AppLoading />
      return (
         <RootStack />
      );
   }
}

export default App;
