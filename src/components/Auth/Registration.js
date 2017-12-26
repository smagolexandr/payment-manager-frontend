import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          username: this.state.username,
          password: this.state.password
        }),
      }).then(response => response.status)
        .then(response => {
          if (response == 200){
            this.props.history.push("/login")
          }
        })
        .catch(error => {
          console.error(error);
        });
    }

  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-md-6 text-center">
            <h1>Registration</h1>
            <form className="form-signin" name="form" onSubmit={this.handleSubmit}>
              <div className="form_group">
                <label>
                  Firstname
                </label>
                <input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
              </div>

              <div className="form_group">
                <label>
                  Lastname
                </label>
                <input type="text" className="form-control" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
              </div>

              <div className="form_group">
                <label>
                  Username
                </label>
                <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>

              <div className="form_group">
                <label>
                  Password
                </label>
                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <Link className='btn btn-success' to={`/home`}><i className="fa fa-btn fa-home"></i> Home</Link>
              <button type="submit" className="btn btn-success"><i className="fa fa-sign-in" aria-hidden="true"></i>Register</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Registration;