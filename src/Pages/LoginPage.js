import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Col, Row, Input, Button } from 'antd'

import { getChats } from '../Actions/Chats'

class LoginPage extends Component {
    state = {
        loading: false,
        projectID: '8a1f9edb-a05a-4b55-9d6e-ec399a38f5a9',
        userName: '',
        userSecret: '',
    }

    submit(){
        this.setState({ loading: true })

        this.props.getChats(
            this.state, 
            () => {
                if (this.state.userName === 'adam_lamorre') {
                    window.location.replace('/support')
                } else {
                    window.location.replace('/chats')
                }
            },
            (e) => console.log('e', e)
        )
    }
    
    render() {  
        return (
            <Row>
                <Col xs={0} sm={2} md={8} />

                <Col xs={24} sm={20} md={8}>
                    <Input 
                        type='text'
                        placeholder='User Name'
                        onChange={(e) => this.setState({ userName: e.target.value })}
                    />
                    <Input 
                        type='password'
                        placeholder='Password'
                        onChange={(e) => this.setState({ userSecret: e.target.value })}
                    />

                    <Button 
                        type='primary'
                        loading={this.state.loading}
                        onClick={() => this.submit()}
                    >
                        Submit
                    </Button>
                </Col>

                <Col xs={0} sm={2} md={8} />
            </Row>
        )
    }
}

function mapStateToProps(state){
    return { accounts: state.accounts }
}
  
function mapDispatchToProps(dispatch){
    return bindActionCreators({ getChats }, dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)