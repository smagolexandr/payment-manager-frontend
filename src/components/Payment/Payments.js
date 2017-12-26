import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/payment', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': this.props.user.token
      }
    }).then(response => response.json())
      .then(payments => {
        this.setState({payments})
      })
      .catch(error => {
        console.error(error);
      });
  }

  render () {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-md-6 text-center">
            <h1>Payments list</h1>
            <table className="table">
              <tr>
                <th>
                  id
                </th>
                <th>
                  Amount
                </th>
                <th>
                  Date
                </th>
              </tr>
              {this.state.payments.map(payment =>
                <tr className='user' key={payment.id}>
                  <td>
                    {payment._id}
                  </td>
                  <td>
                    {payment.amount}
                  </td>
                  <td>
                    {payment.date}
                  </td>
                </tr>
              )}
            </table>
            <Link className='btn btn-success' to={`/payment/new`}><i className="fa fa-btn fa-plus"></i> Add </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Payments