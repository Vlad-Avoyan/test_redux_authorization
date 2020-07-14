import React from 'react';
import "./App.css"
import AuthContainer from './components/AuthComponent';
import { createStore } from 'redux'
import rootReducer from './store/reducers'
import { Provider } from 'react-redux'
import RegistrationContainer  from './components/RegistrationContainer'

const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <h1>Complex State</h1>
          <div className="forms">
            <AuthContainer />
            <RegistrationContainer />
          </div>
        </div>
      </Provider>

    )
  }
}
