import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
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

  render () {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-md-6 text-center">
            <h1>Categories list</h1>
            <ol>
              {this.state.categories.map(category =>
                <li className='category' key={category._id}>
                  <h6>{category.title}</h6>
                </li>
              )}
            </ol>

            <Link className='btn btn-success' to={`/category/new`}><i className="fa fa-btn fa-plus"></i> Add </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Categories