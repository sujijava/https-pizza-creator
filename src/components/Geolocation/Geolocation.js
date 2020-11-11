import React, {Component} from 'react';
import axios from 'axios';

class Geolocation extends Component {

  state = {
  availableArea: false,
  inCanada: false,
  geoResponse: []
}; 

  componentDidMount(){


    axios.get('https://api.ipdata.co?api-key=e743783864e208f0fb2b0a3b6f493eaf92de6df082dbdcd101edcc9d')
    .then(response => {
      this.setState({geoResponse: response.data});
    })
    .then(()=>{
      this.gtaChecker()
      this.canadaChecker()
    });
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

  canadaChecker(){
    if(this.state.geoResponse.country_name.toLowerCase()==="canada"){
      this.setState({inCanada: true})
    }
  }

  render(){

    let deliveryMessage = `Your are in ${this.state.geoResponse.city}, ${this.state.geoResponse.country_name}`;

    let availableCountryMessage = null;

    if(!this.state.inCanada){
      availableCountryMessage = `Sorry, this service is not available in ${this.state.country}`;
    }

    return(
    <div className="deliveryMessage">
      {deliveryMessage}
      <br></br>
      {availableCountryMessage}
    </div>
    )

}
}
export default Geolocation;