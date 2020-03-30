import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <form onSubmit={this.props.getWeather} id="search">
          <label>City Name</label>
          <input
            type="text"
            name="cityName"
            placeholder="Enter the name of the city"
            id="city"
          />
          <button type="submit">Show Weather!</button>
        </form>
      </div>
    );
  }
}
export default Main;
