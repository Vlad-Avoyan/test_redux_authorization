import React from 'react';

export default class Registration extends React.Component {

  onEmailChange = event => {
    this.props.setEmailText(event.target.value)
  }

  onPasswordChange = event => {
    this.props.setPasswordText(event.target.value)
  }

  onRepeatPasswordChange = event => {
    this.props.setRepeatPasswordText(event.target.value)
  }
    render(){
        return (
            <div className="registration">
            <h3>Sign Up</h3>
            <form>
              <div>
                <input
                  type="text"
                  name="login"
                  autoComplete="off"
                  placeholder="E-mail"
                  onChange={this.onEmailChange}
                  value={this.props.email}
                />
              </div>
              <div>
                <input 
                type="password" 
                name="password" 
                placeholder="password"
                onChange={this.onPasswordChange}
                value={this.props.password}
                
                />
              </div>
              <div>
                <input 
                type="password"
                name="password" 
                placeholder="Repeat Password" 
                onChange={this.onRepeatPasswordChange}
                value={this.props.repeatPassword}
                 />
              </div>
              <div>
                <button>Sign In</button>
              </div>
            </form>
          </div>
        )
    }
}