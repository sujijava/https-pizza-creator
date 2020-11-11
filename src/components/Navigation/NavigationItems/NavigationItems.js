import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (

    <ul className="NavigationItems">
      <NavigationItem link="/">
        Pizza Builder
      </NavigationItem>
      <NavigationItem link="/">Check Out</NavigationItem>
    </ul>

);

export default navigationItems;
