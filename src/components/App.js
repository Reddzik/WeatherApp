import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

class App extends Component {
  APIKey = '3781566920336af86daec0e4b7ecfdae';
  state = {
    city:'',
    value:'',
    data:{
      date:'data',
      temp:'',
      feelsLike:'',
      pressure:'',
      windSpeed:'',
      sunrise:'',
      sunset:'',
      err: false,
    },
  }
  
  getData = () =>{
    const value = this.state.value;
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${this.APIKey}`;
    fetch(API)
    .then(response=> {
      if(response.ok){
        return response
      }
    })
    .then(response => response.json())
    .then(APIdata=> {
      const currentDate = new Date().toLocaleString();
      this.setState({
        data:{
          date:currentDate,
          temp:APIdata.main.temp,
          feelsLike:APIdata.main.feels_like,
          pressure:APIdata.main.pressure,
          windSpeed:APIdata.wind.speed,
          sunrise:APIdata.sys.sunrise,
          sunset:APIdata.sys.sunset,
        },
        city:APIdata.name,
      })
    })
    .catch(err => {console.log(err)
      this.setState({
        err:true,
        city:'(Brak danego miasta w bazie)'
      })
    });
  }

  cityInputHandler = (e) =>{
    this.setState({
      value: e.target.value,
    })
  }
  cityClickHandler = (e) =>{
    e.preventDefault();
    this.getData();

  }

  render() {
    return (
      <div>
        <Form value={this.state.value} 
        change={this.cityInputHandler} 
        click={this.cityClickHandler}/>
        <p>Wynik wyszukiwania dla {this.state.city}</p>
        <Result 
        weather={this.state.data} city={this.state.city}/>
      </div>
    );
  }
}

export default App;
