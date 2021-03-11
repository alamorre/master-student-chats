import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logout } from '../Actions/Accounts'

import { ChatEngine } from 'react-chat-engine'

class SupportPage extends Component {
    render() {  
        if (!this.props.accounts.userName) { window.location.replace('/') }

        return (
            <div style={{ position: 'absolute', top: '0px', width: '100%' }}>
                <ChatEngine 
                    height='100vh'
                    userName={this.props.accounts.userName}
                    userSecret={this.props.accounts.userSecret}
                    projectID={this.props.accounts.projectID}
                />

                <button 
                    onClick={() => this.props.logout()}
                    style={{ position: 'absolute', bottom: '12px', right: '12px' }}
                >
                    Logout
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { accounts: state.accounts }
}
  
function mapDispatchToProps(dispatch){
    return bindActionCreators({ logout }, dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SupportPage)