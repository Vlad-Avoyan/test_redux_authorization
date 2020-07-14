import React from 'react';

export default class Auth extends React.Component {

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
                />
              </div>
              <div>
                <input type="password" name="password" placeholder="password" />
              </div>
              <div>
                <button>Sign In</button>
              </div>
            </form>
          </div>
        )
    }
}