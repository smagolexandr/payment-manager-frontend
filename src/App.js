import React, { Component } from 'react';
// import { Router, Route, Switch } from 'react-router'
// import { connect } from 'react-redux'
import logo from './logo.svg';
import Login from './components/Login';
// import Registration from './components/Registration';
import { Chart } from 'react-google-charts';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Login/>
        {/*<Registration/>*/}
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<button onClick={this.register}>register</button>*/}
        {/*<button onClick={this.login}>login</button>*/}
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
