import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
   Container,
   Content,
   Icon,
   Item,
   Input,
   List,
   ListItem,
   Picker
} from 'native-base';

import druidSpells from '../spells/druid'

export default class SpellList extends Component {
   static navigationOptions = {
      headerTitle: 'Druid Spells',
      headerStyle: {
         backgroundColor: '#2ecc71',
      },
      headerTintColor: '#fff'
   };

   constructor() {
      super();

      this.state = {
         spells: druidSpells,
         level: 'all',
      }
   }

   _changeLevel = value => {
      this.setState({
         level: value
      });
   }

   _spellSearch = text => {
      this.setState({ spells: text ? druidSpells.filter(i => i._name.toLowerCase().indexOf(text) > -1) : druidSpells, level: 'all' });
   }

   _buildSpellList = () => {
      const { spells, level } = this.state;
      let spellList = spells;

      if (level !== 'all')
         spellList = spells.filter(spell => spell._level === level);

      return this._mapSpells(spellList);
   }

   _mapSpells = spells => {
      const { navigation } = this.props;

      return spells.map((spell, index) =>
         <ListItem key={index} onPress={() => {
            navigation.navigate('SpellDetails', {
               spell: spell
            });
         }}>
            <Text>{spell._name}</Text>
         </ListItem>
      )
   }

   render() {
      const { level } = this.state;
      return (
         <View style={styles.container}>
            <Container>
               <Content>
                  <Item>
                     <Icon active name='search' />
                     <Input placeholder='Search for spell' onChangeText={this._spellSearch} />
                  </Item>
                  <Text style={{ paddingTop: 10, fontWeight: 'bold' }}>Filter by level</Text>
                  <Item picker>
                     <Picker
                        mode='dropdown'
                        iosIcon={<Icon name='ios-arrow-down-outline' />}
                        style={{ width: undefined }}
                        placeholder='Select spell level'
                        placeholderStyle={{ color: '#bfc6ea' }}
                        placeholderIconColor='#007aff'
                        selectedValue={level}
                        onValueChange={this._changeLevel}
                     >
                        <Picker.Item label='All' value='all' />
                        <Picker.Item label='0' value='0' />
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='5' value='5' />
                        <Picker.Item label='6' value='6' />
                        <Picker.Item label='7' value='7' />
                        <Picker.Item label='8' value='8' />
                        <Picker.Item label='9' value='9' />
                     </Picker>
                  </Item>
                  <Item>
                     <List>
                        {this._buildSpellList()}
                     </List>
                  </Item>
               </Content>
            </Container>
         </View >
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingLeft: 10,
      paddingRight: 10
   },
});
