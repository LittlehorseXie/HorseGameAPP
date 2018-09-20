import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startGame: 'START GAME',
      goHome: 'GO HOME'
    }
  }
  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{padding: 20, fontSize: 30, color: 'black', borderWidth: 2, borderRadius: 10, borderColor: 'black'}}
            onPress={() => this.props.navigation.navigate('SquareGame')}
          >{this.state.startGame}</Text>
          <Text
            style={{padding: 8, fontSize: 14, marginTop: 15, color: 'black', borderWidth: 2, borderRadius: 10, borderColor: 'black'}}
            onPress={() => this.props.navigation.navigate('Home')}
          >{this.state.goHome}</Text>
        </View>
    );
  }
}

