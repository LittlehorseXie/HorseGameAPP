import React, { Component } from 'React'
import { GAME_STATE_NOT_START, GAME_STATE_PLAYING, GAME_STATE_OVER } from './utils/constants.js'
import GameStartView from './view/GameStartView.js'
import GamePlayingView from './view/GamePlayingView.js'
import GameOverView from './view/GameOverView.js'

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameState: GAME_STATE_NOT_START
    }
    this.changeGameState.bind(this)
  }
  changeGameState = (state) => {
    this.setState({
      gameState: state
    })
  }
  render() {
    switch(this.state.gameState) {
      case GAME_STATE_NOT_START:
        return <GameStartView changeGameState={this.changeGameState} />
        break
      case GAME_STATE_PLAYING:
       return <GamePlayingView changeGameState={this.changeGameState} />
       break
      case GAME_STATE_OVER:
        return <GameOverView changeGameState={this.changeGameState} />
        break
    }
  }
}