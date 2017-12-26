import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
    event.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      fetch('http://localhost:8080/login', {
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
          this.props.changeCurrentUser(responseJson.user)
          this.props.history.push("/home")
        })
        .catch(error => {
          console.error(error);
        });
    }

  }

  render () {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-md-6 text-center">
            <form className="form-signin" onSubmit={this.handleSubmit} method="post">
              <h1>Sign In</h1>

              <div className="form-group">
                <label>Username</label>
                <input type="text" id="username" className="form-control"
                       name="username" value={this.state.username} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" id="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <Link className='btn btn-success' to={`/home`}><i className="fa fa-btn fa-home"></i> Home</Link>
              <Link className='btn btn-success' to={`/registration`}><i className="fa fa-btn fa-user"></i> Registration</Link>

              <button type="submit" className="btn btn-success"><i className="fa fa-sign-in" aria-hidden="true"></i>Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login