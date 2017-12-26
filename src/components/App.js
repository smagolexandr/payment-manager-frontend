import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class App extends Component {

  render () {
    return (
      <div className="App container">
        <header className="header clearfix">
          <nav className="navbar navbar-expand-lg navbar-light">

            <Link className='navbar-brand' to={`/home`}>Payment Manager</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                <li className='nav-item'>
                  <Link className='nav-link' to={`/login`}>Login</Link>
                </li>
                <li className='nav-item'>

                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={`/categories`}>Categories</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/payments'}>Payments</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default App
