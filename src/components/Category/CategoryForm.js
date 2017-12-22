import React, { Component } from 'react'

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
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
      console.log(this.props.user)
      fetch('http://localhost:3000/category', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.state.title,
          user: this.props.user
        }),
      }).then(response => response.json())
        .then(responseJson => {
          console.log(responseJson)
          return responseJson
        })
        .catch(error => {
          console.error(error);
        });
    }
    event.preventDefault()
  }

  render () {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" name='title' value={this.state.title} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default CategoryForm