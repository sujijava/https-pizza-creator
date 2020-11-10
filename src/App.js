import React, { Component } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import PizzaBuilder from "./container/PizzaBuilder/PizzaBuilder";
import GeoLocation from "./components/Geolocation/Geolocation";

class App extends Component {

  render() {
    return (
      <Layout>
        <GeoLocation></GeoLocation>
        <PizzaBuilder></PizzaBuilder>
      </Layout>
    );
  }
}

export default App;
