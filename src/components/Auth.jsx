import React from 'react';

export default class Auth extends React.Component {

  onEmailChange = (event) => {
    this.props.setEmailText(event.target.value)
  }
  onPasswordChange = (event) => {
    this.props.setPasswordText  (event.target.value)
    
  }  

    render(){
        return (
            <div className="auth">
            <h3>Sign In</h3>
            <form>
              <div>
                <input
                  type="text"
                  name="login"
                  autoComplete="off"
                  placeholder="E-mail"
                  value = {this.props.email}
                  onChange={this.onEmailChange}
                />
              </div>
              <div>
                <input 
                type="password" 
                name="password" 
                placeholder="password" 
                value={this.props.password} 
                onChange={this.onPasswordChange}
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