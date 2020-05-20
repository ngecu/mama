import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'
import axios from "axios";

export default class Chart extends Component {
    

    componentDidMount(){
        this.fetchLocal();
        console.log('jo',)
    }

    constructor(props) {
        super(props);
        
        this.state = {
            chartData: {
                labels: ['Confrimed Cases', 'Reocovered Cases', 'Deaths'],
                datasets: [{
                      label: 'Covid 19',
                    data: [10, 10, 10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                        
                    ],
                    borderColor: [
                        '#ffd600',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                       
                    ],
                    borderWidth: 1
                }],
               

            },
            local_confirmed:"",local_deaths:"",local_recovered:""
        }
    }

    fetchLocal = () => {
        axios.get('https://covid19.mathdro.id/api/countries/KE')
        .then((response) => {
            const local_confirmed = response.data.confirmed.value
            const local_deaths = response.data.deaths.value
            const local_recovered = response.data.recovered.value
            
            this.setState({local_confirmed,local_deaths,local_recovered})
        })
    }
    
    
    render() {
        return (
      
                <Bar 
                data = {this.state.chartData}
                options ={{maintainAspectRation:false}}
                />
            
        )
    }
}
