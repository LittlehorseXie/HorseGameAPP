import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, ART } from 'react-native';
import { GAME_STATE_NOT_START, GAME_STATE_PLAYING, GAME_STATE_OVER } from '../utils/constants.js'

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startGame: 'START GAME',
      goHome: 'GO HOME'
    }
  }
  render() {
    const path = ART.Path()
    path.moveTo(1, 20)
    path.lineTo(300, 20)
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={() => this.props.changeGameState(GAME_STATE_PLAYING)}>
          <Text
            style={{padding: 20, fontSize: 30, color: 'black', borderWidth: 2, borderRadius: 10, borderColor: 'black'}}
            onPress={() => this.props.changeGameState(GAME_STATE_PLAYING)}
          >{this.state.startGame}</Text>
          <ART.Surface width={300} height={20}>
            <ART.Shape d={path} stroke="#000000" strokeWidth={1} />
          </ART.Surface>
        </View>
    );
  }
}

