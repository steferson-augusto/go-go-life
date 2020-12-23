import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import 'react-native-gesture-handler'

import Routes from './routes'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
      <Routes />
    </Provider>
  )
}

export default App
