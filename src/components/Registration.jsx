import React from 'react';

export default class Registration extends React.Component {

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
                />
              </div>
              <div>
                <input type="password" name="password" placeholder="password" />
              </div>
              <div>
                <input type="password" name="password" placeholder="Repeat Password" />
              </div>
              <div>
                <button>Sign In</button>
              </div>
            </form>
          </div>
        )
    }
}