import React, { Component } from "react";
import axios from "axios";
import CityCard from "./CityCard";

class CityDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      zip: "",
      resultsFound: false,
    };

    this.changeZip = this.changeZip.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  //on typing, change zip state
  changeZip(event) {
    this.setState({
      zip: event.target.value,
    });
  }

  fetchData() {
    let url = `https://ctp-zip-api.herokuapp.com/zip/${this.state.zip}`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        this.setState({ data: response.data, resultsFound: true });
      })
      .catch((err) => {
        this.setState({ resultsFound: false });
      });
  }
  render() {
    return (
      <div>
        <div className="search">
          <div className="searchBox">
            <input
              type="text"
              value={this.state.zip}
              onChange={this.changeZip}
              placeholder="Enter zip-code..."
            ></input>
            <button onClick={this.fetchData}>Search</button>
          </div>
        </div>

        {/* show results if data was found for the give zip-code */}
        {this.state.resultsFound ? (
          <div>
            {this.state.data.map((item, index) => (
              <CityCard
                key={index}
                name={item.LocationText}
                state={item.State}
                locationLat={item.Lat}
                locationLong={item.Long}
                population={item.EstimatedPopulation}
                wages={item.TotalWages}
              />
            ))}
          </div>
        ) : (
          <div className="cityCard">
            <p>No results</p>
          </div>
        )}
      </div>
    );
  }
}

export default CityDisplay;
