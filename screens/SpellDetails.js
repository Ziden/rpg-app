import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
   Body,
   Button,
   Container,
   Content,
   H3,
   Header,
   Icon,
   Left,
   List,
   ListItem,
   Right,
   Title,
} from 'native-base';

import druidSpells from '../spells/druid'

const sanitizeKey = key => {
   key = key.substring(1);

   return key.charAt(0).toUpperCase() + key.slice(1);
};

export default class SpellDetails extends Component {
   static navigationOptions = ({ navigation }) => {
      return {
         title: navigation.getParam('spell', {})._name,
         headerStyle: {
            backgroundColor: '#2ecc71',
         },
         headerTintColor: '#fff'
      }
   };

   render() {
      const { navigation } = this.props;
      const spell = navigation.getParam('spell', {});
      return (
         <View style={styles.container}>
            <Container>
               <Content>
                  {Object.keys(spell).map((key, index) => {
                     return (
                        <Text key={index}>
                           <Text style={styles.boldText}>{sanitizeKey(key) + '\n'}</Text>
                           <Text>{spell[key]}</Text>
                        </Text>
                     )
                  })}
               </Content>
            </Container>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20
   },
   boldText: {
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 50
   }
});
