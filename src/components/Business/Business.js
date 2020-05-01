import React, { Component } from "react";
import "./Business.css";

//Create the <Business /> Component
//use this.props to access the business object in App.js
class Business extends Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img
            src={this.props.business.imageSrc}
            alt={this.props.business.name}
          />
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>
              {`${this.props.business.state} ${this.props.business.zipCode}`}
            </p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.props.business.reviewCount} review`}</p>
          </div>
        </div>
      </div>
    );
  }
}

//export component to be available to the rest of the Ravenous app.
export default Business;
