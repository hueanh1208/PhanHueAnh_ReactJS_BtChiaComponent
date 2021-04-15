import { Component } from "react";
import CardTitle from "./CardTitle";

class ListCardTitle extends Component {
  render() {
    return (
      <div className="row">
        <CardTitle/>
        <CardTitle/>
        <CardTitle/>   
      </div>
    );
  }
}

export default ListCardTitle;
