import React, { Component } from 'react'
import { Chart } from 'react-google-charts';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthly: {}
    };

    fetch('http://localhost:8080/category/monthly', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': this.props.user.token
      },
    }).then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        this.state.monthly = responseJson
      })
      .catch(error => {
        console.error(error);
      });
  }

  render () {
    return (
      <div className={'my-pretty-chart-container'}>
      <Chart
      chartType="PieChart"
      data={[["Task","Hours per Day"],["Work",11],["Eat",2],["Commute",2],["Watch TV",2],["Sleep",7]]}
      options={{}}
      graph_id="ScatterChart"
      width="100%"
      height="400px"
      legend_toggle
      />
      </div>
    )
  }
}

export default Index