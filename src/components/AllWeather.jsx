import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import sun from '../access/sun.png'
import { setWeatherToday } from '../redux/slice/weatherSlice'

import '../scss/components/all_weather.scss'
import ImageWether from '../tert/ImageWether'




const Weather = ({ weather, index, selectedDay, setSelectedDay }) => {


    const { allWeather } = useSelector(state => state.weather)
    const dispatch = useDispatch();

    let daysWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];
    let date = weather.dt_txt.slice(0, 10).split('-')
    if (date[1] < 10) {
        date[1] = date[1].slice(1)
    }
    let arrDay = new Date(date);
    let day = daysWeek[arrDay.getDay()];

    const selectDay = (day, index) => {
        setSelectedDay(index)
        let date = day.dt_txt.slice(0, 10)
        const selectedWeatherDay = allWeather.list.filter(ww => ww.dt_txt.includes(date))
        dispatch(setWeatherToday(selectedWeatherDay))

    }

    let daysWeather = allWeather.list.filter(date => date.dt_txt.includes(weather.dt_txt.slice(0, 10)))

    let max = daysWeather.reduce((max, value) => (value.main.temp - 275.3 > max ? Math.floor(value.main.temp - 275.3) : max), 0)
    let min = daysWeather.reduce((min, value) => (value.main.temp - 275.3 < min ? Math.floor(value.main.temp - 275.3) : min), 100)
    console.log(weather)
    return (

        <div className={index === selectedDay ? 'active card' : 'card'} onClick={() => selectDay(weather, index)}>
            <h5> {day} </h5>
            <p> {(weather.dt_txt).slice(0, 10)}</p>
            <ImageWether wea={weather.weather[0].main} />
            <p> {min}<sup>o</sup>C - {max}<sup>o</sup>C</p>
            <p> {weather.weather[0].description}</p>
        </div >
    )
}




const AllWeather = () => {
    const { allWeather } = useSelector(state => state.weather)
    const [selectedDay, setSelectedDay] = useState('')

    const weatherr = allWeather.list.filter(date => date.dt_txt.includes('15:00:00'))




    return (
        <>
            <div className='block_card'>
                {weatherr.map((weather, index) => <Weather
                    key={index}
                    index={index}
                    weather={weather}
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                />)}
            </div>
        </>
    )
}

export default AllWeather;