import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Measure from './screens/Measure'
import History from './screens/History'
import Base from './screens/Base'

const stackNavigator = createStackNavigator({
  Home: Base,
  Measure: Measure,
  History: History
})

const App = createAppContainer(stackNavigator)
export default App