import React from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';
import { setPasswordText, setEmailText } from '../store/auth/actions'

 class AuthContainer extends React.Component {
    render(){
        return <Auth email={this.props.mail} password={this.props.password} setEmailText={this.props.setEmailText} setPasswordText={this.props.setPasswordText}/>
    }
}

const mapStateToProps = state => ({
    email: state.auth.email,
    password: state.auth.password,
})

const mapDispatchToProps = {
    setEmailText,
    setPasswordText
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer)