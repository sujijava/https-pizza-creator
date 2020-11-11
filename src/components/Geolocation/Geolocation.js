import React, {Component} from 'react';
import axios from 'axios';

class Geolocation extends Component {

  state = {
  availableArea: false,
  inCanada: false,
  geoResponse: [],
  errorMessage: ''
}; 

  componentDidMount(){

    axios.get('https://api.ipdata.co?api-key=e743783864e208f0fb2b0a3b6f493eaf92de6df082dbdcd101edcc9d')
    .then(response => {
      this.setState({geoResponse: response.data});
    })
    .then(()=>{
      this.gtaChecker()
    }).catch((err)=>{
      this.state.errorMessage = `Error-Geolocation API`
    })
  }

  gtaChecker(){
    if(this.state.geoResponse.city.toLowerCase()==="oakville"){
      this.setState({availableArea: true});
    }

    if(this.state.geoResponse.city.toLowerCase()==="toronto"){
      this.setState({availableArea: true});
    }

    if(this.state.geoResponse.city.toLowerCase()==="waterloo"){
      this.setState({availableArea: true});
    }

    if(this.state.geoResponse.city.toLowerCase()==="ottawa"){
      this.setState({availableArea: true});
    }

    if(this.state.geoResponse.city.toLowerCase()==="vancouver"){
     this.setState({availableArea: true}); 
    }
  }


  render(){

    // let deliveryMessage = `Your are in ${this.state.geoResponse.city}, ${this.state.geoResponse.country_name}`;

    let availableMessage = `Sorry, this service is not available in ${this.state.geoResponse.city}` ;

    if(!this.state.availableArea){
      availableMessage = `Sorry, this service is not available in ${this.state.geoResponse.city}, ${this.state.geoResponse.country_name}`;
    }else {
      availableMessage = `Yay! this service is available in ${this.state.geoResponse.city}, ${this.state.geoResponse.country_name}`
    } 

    return(
    <div className="deliveryMessage">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-truck" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>  {availableMessage}{this.state.errorMessage}  
    </div>
    )
}
}
export default Geolocation;