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
      fetch('http://localhost:8080/category', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-AUTH-TOKEN': this.props.user.token
        },
        body: JSON.stringify({
          title: this.state.title
        }),
      }).then(response => response.json())
        .then(responseJson => {
          this.props.history.push("/login")
        })
        .catch(error => {
          console.error(error);
        });
    }
    event.preventDefault()
  }

  render () {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-md-6 text-center">
            <h1>New Category</h1>
            <form className="form-signin" name="form" onSubmit={this.handleSubmit}>
              <div className="form_group">
                <label>
                  Title
                </label>
                <input type="text" className="form-control" name='title' value={this.state.title} onChange={this.handleChange} />
              </div>
              <button type="submit" className="btn btn-success">Save</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryForm