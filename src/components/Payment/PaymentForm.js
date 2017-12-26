import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      category: '',
      description: '',
      categories: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/category', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': this.props.user.token
      }
    }).then(response => response.json())
      .then(categories => this.setState({categories}))
      .catch(error => {
        console.error(error);
      });
  }

  handleChange(e) {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSubmit(event) {
    if (this.state.amount !== '' && this.state.category !== '') {
      console.log(this.state, Date.now().toISOString())}
    //   fetch('http://localhost:8080/payment', {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       'X-AUTH-TOKEN': this.props.user.token
    //     },
    //     body: JSON.stringify({
    //       amount: this.state.amount,
    //       category: this.state.category,
    //       date: Date.now().toISOString()
    //     }),
    //   }).then(response => response.json())
    //     .then(responseJson => {
    //       console.log(responseJson)
    //       return responseJson
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }
    event.preventDefault()
  }

  render () {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-md-6 text-center">
            <h1>Registration</h1>
            <form className="form-signin" name="form" onSubmit={this.handleSubmit}>
              <div className="form_group">
                <label>
                  Amount
                </label>
                <input type="text" className="form-control" name="amount" value={this.state.amount} onChange={this.handleChange} />
              </div>

              <div className="form_group">
                <label>
                  Category
                </label>
                <select className="form-control" value={this.state.category} name="category" onChange={this.handleChange}>
                  {this.state.categories.map((category, index) =>
                    <option value={category._id} key={category.id}>{category.title}</option>
                  )}
                </select>
              </div>

              <div className="form_group">
                <label>
                  Description
                </label>
                <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>

              <button type="submit" className="btn btn-success">Save</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default PaymentForm