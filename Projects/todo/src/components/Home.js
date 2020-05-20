import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        console.log("this is the console" ,this.props)
        return (
            <div>
           
             <h1>Confirmed Cases {this.props.global_confirmed}</h1>
            <h1>Confirmed Deaths {this.props.global_deaths}</h1>
        <h1>Confrimed recovered {this.props.global_recovered}</h1>
            </div>
        )
    }
}
