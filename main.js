import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import reducersApp from './reducers/reducersApp'

let store = createStore(reducersApp)
let rootElement = document.getElementById('app')

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  rootElement
)
