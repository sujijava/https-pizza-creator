import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

import "../../App.css";

class Layout extends Component {
  
  state = {
    loadingInProgress: false,
    contents: null
  };

  // componentDidMount = (previousProps, previousState) => {
  //   if (previousProps.data !== this.props.data) {
  //     this.setState({loadingInProgress: false, divClassName: 'Something'})
  // }
  // }

  
  render() {
  
    // const loaded = 
    //     `<div className={this.state.divClassName}>
    //       <Toolbar></Toolbar>, SideDrawer, Backdrop
    //     </div>
    //     <main>{this.props.children}</main>`

    // const loading = `<Aux>
    //     <Spinner></Spinner>
    //   </Aux>`

    // if (this.state.loadingInProgress) {
    //   this.setState({contents: loading});
    // } else {
    //   this.setState({contents: loaded});
    // }

    return (<Aux>
      <div className={this.state.divClassName}>
           <Toolbar></Toolbar>, SideDrawer, Backdrop
           <main>{this.props.children}</main>
         </div>
    </Aux>)
  }
}

export default Layout;
