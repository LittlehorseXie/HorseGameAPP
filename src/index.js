import { createStackNavigator } from 'react-navigation'
import Home from './pages/home/index.js'
import Test from './pages/test/index.js'
import SquareGame from './pages/squaregame/index.js'

export default App = createStackNavigator({
  Home: { screen: Home },
  Test: { screen: Test },
  SquareGame: { screen: SquareGame}
}, {
  headerMode: 'none',
})

