import React from "react";
import "./App.css";
import Header from "./Componentes/Header";
import Main from "./Componentes/Main";
import Footer from "./Componentes/Footer";
import Weather from "./Componentes/Weather";

const apiKey = "4545421274aa743b4190236f420d3ec6";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.cityName.value;
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const data = await api_call.json();
    if (data.cod === "404") {
      console.log(data);
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Check spelling of the city name"
      });
    } else if (city === "") {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a city name!"
      });
    } else if (city) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Main getWeather={this.getWeather}></Main>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        ></Weather>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;
