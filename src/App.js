import React from 'react';
import "./App.css"
import Auth from './components/Auth';
import Registration from './components/Registration';

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Complex State</h1>
        <div className="forms">
          <Auth/>
          <Registration />
        </div>
      </div>
    )
  }
}
