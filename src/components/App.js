import React, { Component } from 'react';
// import { Router, Route, Switch } from 'react-router'
import { BrowserRouter, Route, Link } from 'react-router-dom'
// import { connect } from 'react-redux'
import logo from './logo.svg';
import { Chart } from 'react-google-charts';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<h1 className="App-title">Welcome to my application</h1>*/}
        {/*</header>*/}
        <div className='navLink sidebar1'>
          <img src={logo} className="App-logo" alt="logo" />
          <Link className='list' to={`/login`}>Login</Link>
          <Link className='list' to={`/registration`}>Registration</Link>
        </div>

        {/*<div className={'my-pretty-chart-container'}>*/}
          {/*<Chart*/}
            {/*chartType="PieChart"*/}
            {/*data={[["Task","Hours per Day"],["Work",11],["Eat",2],["Commute",2],["Watch TV",2],["Sleep",7]]}*/}
            {/*options={{}}*/}
            {/*graph_id="ScatterChart"*/}
            {/*width="100%"*/}
            {/*height="400px"*/}
            {/*legend_toggle*/}
          {/*/>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default App;
