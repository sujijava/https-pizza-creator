import React, {Component} from 'react';



class Geolocation extends Component {

  state = {
    
  city: null,
  country: null,
  availableArea: false,
  inCanada: false}; 

  componentDidMount(){
    fetch('http://api.ipstack.com/check?access_key=dd3d2ab8fa46c73f3963a828a513d04e')
    .then(res => res.json())
    .then((result)=>{
      this.setState({city: result.city});
      this.setState({country: result.country_name})
      console.log(this.state.city);
    })
    .then(()=>{
      this.gtaChecker()
      this.canadaChecker()});
  }

  gtaChecker(){
    if(this.state.city.toLowerCase()==="oakville"){
      this.setState({availableArea: true});
    }

    if(this.state.city.toLowerCase()==="vancouver"){
     this.setState({availableArea: true}); 
    }
  }

  canadaChecker(){
    if(this.state.country.toLowerCase()==="canada"){
      this.setState({inCanada: true})
    }
  }

  render(){

    let deliveryMessage = `Your are in ${this.state.city}, ${this.state.country}`;

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