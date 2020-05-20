import React, { Component } from 'react';
import Chart from './Chart';
export default class Kenya extends Component {
  

    render() {

        return (
            <div >
             <div className="row">
    <div className="col">
    <div className="d-flex flex-column bd-highlight bg-white">
  <div className="p-2 bd-highlight text-center">
  <div className="card bg-dark text-white p-2 hoverable">
                        <div className="card-body">
                        <h5>Confirmed Cases</h5>
                <h1>{this.props.local_confirmed}</h1>
                
             </div>
     
  </div>
  </div>
 
  
  <div className="p-2 bd-highlight text-center">
  <div className="card bg-danger text-white p-2 hoverable">
                        <div className="card-body">
                        <h5>Deaths</h5>
                <h1>{this.props.local_deaths}</h1>
                
             </div>
     
  </div>
  </div>
  <div className="p-2 bd-highlight text-center">
  <div className="card bg-success text-white p-2 hoverable">
                        <div className="card-body">
                        <h5>Recovered Cases</h5>
                <h1>{this.props.local_recovered}</h1>
                
             </div>
     
  </div>
  </div>

  
  </div>
    </div>
    <div className="col-6">
    <div class="d-flex bd-highlight mb-3 h-100">
  <div class="p-2 bd-highlight w-100">
                        <Chart  />
      </div>
  
</div>
    
    
  </div>
   
    <div className="col">
    <div className="d-flex flex-column bd-highlight">
  <div className="p-2 bd-highlight text-center">
  <div className="card bg-dark text-white p-2 hoverable">
                        <div className="card-body">
                        <h5>Fatality Rate</h5>
                        <h1>5.19%</h1>
                
             </div>
     
  </div>
  </div>
 
  <div className="p-2 bd-highlight text-center">
  <div className="card bg-dark text-white p-2 hoverable">
                        <div className="card-body">
                        <h5>Population</h5>
                <h1>49,700,000</h1>
                
             </div>
     
  </div>
  </div>
  
  <div className="p-2 bd-highlight text-center">
  <div className="card bg-dark text-white p-2 hoverable">
                        <div className="card-body">
                        <h5>New Cases</h5>
                <h1>+51</h1>
                
             </div>
     
  </div>
  </div></div>
    </div>

    
    </div>

 
<footer class="page-footer font-small teal pt-4 text-white">

 
  <div class="container-fluid text-center text-md-left">

 
    <div class="row">

 
      <div class="col-md-6 mt-md-0 mt-3">

         <h5 class="text-uppercase font-weight-bold">{new Date(this.props.last_update).toDateString()}</h5>
        <img src="https://source.unsplash.com/random" className="unsplash-img" /> 

      </div>
   

      <hr class="clearfix w-100 d-md-none pb-3"/>

 
      <div class="col-md-6 mb-md-0 mb-3">

        <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
          commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
          excepturi hic.</p>

      </div>
 

    

    </div>

  </div>
 
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href=""> Dev Ngecu</a>
  </div>
  
  
</footer>


            </div>
        )
    }
}
