import React, { Component } from "react";

const CityCard = (props) => (
  <div className="cityCard">
    <div className="title">
      <h3>{props.name}</h3>
    </div>
    <div>State: {props.state}</div>
    <div>
      Location: ({props.locationLat}, {props.locationLong})
    </div>
    <div> Estimated Population: {props.population}</div>
    <div>Total Wages: {props.wages}</div>
  </div>
);
export default CityCard;
