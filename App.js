import React from 'react'
import { connect } from 'react-redux'

import Template from './components/template'

class App extends React.Component {
  render () {
    const { dispatch, visibleTodos } = this.props
    console.log(visibleTodos)
    return (
      <div className="app">
        <div className="container">
          <Template />
        </div>
      </div>
    )
  }
}

function select (state) {
  return {
    visibleTodos: state
  }
}

export default connect(select)(App)
