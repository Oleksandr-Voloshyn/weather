import React, { useState } from 'react';

import '../scss/components/header.scss';

import logo from '../access/logo.png';
import searchImg from '../access/search.png'
import { useDispatch } from 'react-redux';
import { fetchAllWeather, fetchWeather } from '../redux/slice/weatherSlice';

const Header = () => {


    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const searchWeather = () => {
        dispatch(fetchWeather(search))
        dispatch(fetchAllWeather(search))
    }

    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={logo} />
                <span> REACT WEATHER</span>
            </div>
            <div className='header__search'>
                <input type='text'
                    value={search}
                    onChange={onChangeHandler}
                    placeholder="Введіть місто"
                />
                <img
                    src={searchImg}
                    alt='search'
                    onClick={searchWeather}
                />
            </div>
        </div>
    )
}

export default Header;