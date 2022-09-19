import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import '../scss/components/weather_today.scss'

import clear from '../access/sun.png'
import rainy from '../access/rainy.png'
import clouds from '../access/clouds.png'
import pressure from '../access/pressure.png';
import temperature from '../access/temperature.png';
import water from '../access/water.png';
import wind from '../access/wind.png';
import { useEffect } from 'react';
import { fetchWeather } from '../redux/slice/weatherSlice';
import ImageWether from '../tert/ImageWether';



const WeatherToday = () => {


    const { weather, weatherToday, statusTodayWeather } = useSelector(state => state.weather);



    return (
        <div className='today'>
            <div className='today__temperature'>
                <div className='block'>
                    <div>
                        <p> {Math.floor(weather.main.temp - 273)}<sup>o</sup></p>
                        <span> Зараз </span>
                    </div>
                    <ImageWether wea={weather.weather[0].main} />
                </div>
                <p> {weather.name}</p>

            </div>
            <div className='detailed'>
                <div className='detailed__temperature'>
                    <div>
                        <div className='kolo'>
                            <img src={temperature} />
                        </div>
                        <span> Температура:</span>
                        <span> {Math.floor(weather.main.temp - 273)}<sup>o</sup> - відчувається як {Math.floor(weather.main.feels_like - 273)}<sup>o</sup></span>
                    </div>
                    <div>
                        <div className='kolo'>
                            <img src={pressure} />
                        </div>
                        <span> Атмосферний тиск: </span>
                        <span>{weather.main.pressure}мм рт. ст.</span>
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
                        <span> {weather.wind.speed}м/c</span>
                    </div>
                </div>
                <div className='hours'>
                    {
                        weatherToday !== undefined &&
                        weatherToday.map(day => (
                            <div className='hours__deteils'>
                                <spam> {day.dt_txt.slice(10, 16)}</spam>
                                <ImageWether wea={day.weather[0].main} />
                                <p>{Math.floor(day.main.temp - 273)}<sup>o</sup></p>
                            </div>

                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default WeatherToday;