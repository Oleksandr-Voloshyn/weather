import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import '../scss/components/weather_today.scss'

import sun from '../access/sun.png'
import pressure from '../access/pressure.png';
import temperature from '../access/temperature.png';
import water from '../access/water.png';
import wind from '../access/wind.png';
import { useEffect } from 'react';
import { fetchWeather } from '../redux/slice/weatherSlice';



const WeatherToday = () => {

    const { weather } = useSelector(state => state.weather)



    return (
        <div className='today'>
            <div className='today__temperature'>
                <div className='block'>
                    <div>
                        <p> {Math.floor(weather.main.feels_like - 273)} </p>
                        <span> Today </span>
                    </div>
                    <img src={sun} />
                </div>
                <p> Година: 16:00</p>
                <p> {weather.name}</p>

            </div>
            <div className='today__detailed'>
                <div>
                    <div className='kolo'>
                        <img src={temperature} />
                    </div>
                    <span> Температура: </span>
                    <span> 20С</span>
                </div>
                <div>
                    <div className='kolo'>
                        <img src={pressure} />
                    </div>
                    <span> Атмосферний тиск: </span>
                    <span>нормальний</span>
                </div>
                <div>
                    <div className='kolo'>
                        <img src={water} />
                    </div>
                    <span> Осадки: </span>
                    <span> Без осадків </span>
                </div>
                <div>
                    <div className='kolo'>
                        <img src={wind} />
                    </div>
                    <span> Вітер: </span>
                    <span> сильний</span>
                </div>


            </div>
        </div>
    )
}

export default WeatherToday;