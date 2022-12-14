import React from 'react';
import './App.scss'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import AllWeather from './components/AllWeather';
import Header from './components/Header';
import WeatherToday from './components/WeatherToday';
import { fetchAllWeather, fetchWeather } from './redux/slice/weatherSlice';



function App() {

  const { weather, status } = useSelector(state => state.weather)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWeather('Lviv'))
    dispatch(fetchAllWeather('Lviv'))
  }, [])

  return (
    <div className="day">
      {status === 'success' && <>
        <Header />
        <WeatherToday />
        <AllWeather />
      </>}
    </div>
  );
}

export default App;
