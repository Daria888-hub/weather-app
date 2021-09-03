import React, {useState} from "react";
import "./index.css"
import axios from "axios";

export default function Weather (props){
  function HandleResponse(response){
  }
    let apiKey = "a7edac7c339e249bf90472e14cc7ec79";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(HandleResponse);
  
  return (
        <div className= "App">
        <div className="search">
      <form className="change-city" >
        <input
          className="city-name"
          id="city-search"
          type="text"
          placeholder="Change city"
          autoFocus="off"
          autoComplete="off"
        />
        <input
          className="search-button"
          id="search-button"
          type="submit"
          value="Search"
        />
      </form>
      <button>Current location</button>
    </div>
    <div className="current">
    <div className="row">
      <div className="col-5">
        <div className="city">
          <h1>Brisbane</h1>
        </div>
        <p className="day">Tue 13 jun 16:00</p>

        <p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
            id="icon"
            className="float-left"
          />
        </p>
      </div>

      <div className="col-6">
        <div className="characteristics">
          <ul>
            <li>
              <div className="currentCondition">
                <h2>Sunny</h2>
              </div>
            </li>
            <br />
            <li>
              <div className="humidity">
                <h2>humidity 30%</h2>
              </div>
            </li>
            <br />
            <li>
              <div className="wind">
                <h2>wind 20 km/h</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p className="tempretureNow">
      <span id="currentTemp">20°</span>
      <a href="#">C°</a>/<a href="#">F°</a>
    </p>
  </div>
      <div class="openSourse">
       <p class="footer">
      <a href="https://github.com/Daria888-hub/SheCodesD"> Open Sourse</a>, 
      by Daria Lee
      </p>
      </div>
    </div>
    )
}