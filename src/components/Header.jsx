import React, { useState } from 'react';

import '../scss/components/header.scss';

import logo from '../access/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/slice/weatherSlice';

const Header = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const { weather } = useSelector(state => state.weather)

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const searchWeather = () => {
        dispatch(fetchWeather(search))
    }

    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={logo} />
                <span> REACT WEATHER</span>
            </div>
            <div className='header__search'>
                <img src={logo} onClick={() => searchWeather()} />
                <input type='text'
                    value={search}
                    onChange={onChangeHandler}
                    placeholder="Введіть місто"
                />
            </div>
        </div>
    )
}

export default Header;