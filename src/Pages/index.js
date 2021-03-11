import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import history from '../Utilities/history'

import LoginPage from './LoginPage'
import ChatsPage from './ChatsPage'
import SupportPage from './SupportPage'

class RootPage extends Component {
  render() {    
    return (
      <Router history={history}>
        <Switch>
          <Route path='/support' component={SupportPage} />
          <Route path='/chats' component={ChatsPage} />
          <Route path='/' component={LoginPage} />
        </Switch>
      </Router>
    )
  }
}

function mapStateToProps(state){
  return { accounts: state.accounts }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RootPage)
