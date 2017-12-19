import React, { Component } from 'react';
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSubmit(event) {
    if (this.state.username !== '' && this.state.password !== '') {
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        }),
      }).then(response => response.json())
        .then(responseJson => {
          let resp = JSON.parse(responseJson.user)
          connect({resp})
          return responseJson.user
        })
        .catch(error => {
          console.error(error);
        });
    }
    event.preventDefault()
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name={'username'} value={this.state.username} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name={'password'} value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default Login;
