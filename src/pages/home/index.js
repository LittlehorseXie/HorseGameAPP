import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '欢迎来到海贼世界!'
    }
  }
  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.title}>{this.state.title}</Text>
          <Button
            title="click me"
            onPress={() => this.props.navigation.navigate('Test')}
          />
          <Button
            title="西二旗方块 了解一下"
            onPress={() => this.props.navigation.navigate('SquareGame')}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'skyblue',
    fontWeight: 'bold',
    fontSize: 50,
  },
});
