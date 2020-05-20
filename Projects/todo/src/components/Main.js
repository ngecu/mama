import React, { Component } from 'react'
import {Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
import Kenya from './Kenya';

export default class Main extends Component {

    state = { advice : "",global_confirmed:" ",global_deaths:" ",global_recovered:" ",last_update:"",local_confirmed:"",local_deaths:"",local_recovered:""};

    componentDidMount(){
        this.fetchLocal();
        this.fetchCorona();
        this.fetchAdvice();
       
    }
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const advice = response.data.slip.advice
            // console.log(this.state.corona)
            this.setState({advice})
        })
        .catch((error) => {
            console.error(error);
            
        });
    }
   

    fetchCorona = () => {
        axios.get('https://covid19.mathdro.id/api/')
        .then((response) => {
            const global_confirmed = response.data.confirmed.value
            const global_deaths = response.data.deaths.value
            const global_recovered = response.data.recovered.value
            const last_update = response.data.lastUpdate
            this.setState({global_confirmed,global_deaths,global_recovered,last_update})
        })
        .catch((error) =>{
            console.log(error)
        })
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
        const {advice} = this.state
        const {global_confirmed} = this.state
        const {global_deaths} = this.state
        const {global_recovered} = this.state
        const {last_update} = this.state
        const {local_recovered} = this.state
        const {local_confirmed} = this.state
        const {local_deaths} = this.state
      
        return (
            
           <div className="Main">
               
               <div className="row bg-dark text-white p-2 text-center">
               <div className="col-sm  bg-dark text-white p-2 text-center">
               <div className="card bg-dark text-white p-2 ">
                        <div className="card-body">
                            Advice of the day
                  <h5 className="card-title">{advice}</h5>
                
             </div>
            </div>
                   <h1>
                   
                   </h1>
                   </div>
               </div>
                
                <Kenya local_recovered={local_recovered} local_confirmed={local_confirmed} local_deaths={local_deaths} local_recovered={local_recovered} last_update={last_update}/>
            </div>
        )
    }
}
