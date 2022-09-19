import axios from "axios"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")


export const fetchWeather = createAsyncThunk(
    'weather/fetchWeatherStatus',

    async (city) => {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85ca95bfff9c0b82c7bff34257971b11
        `)

        return data;
    }
)
export const fetchAllWeather = createAsyncThunk(
    'weather/fetchAllWeatherStatus',
    async (city) => {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=85ca95bfff9c0b82c7bff34257971b11
        `)
        return data;
    }
)


const initialState = {
    weather: {},
    weatherToday: [],
    allWeather: [],
    status: 'loading',

}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeatherToday(state, action) {
            state.weatherToday = action.payload
        }
    },
    extraReducers: {
        [fetchWeather.pending]: (state, action) => {
            state.status = 'loading';
            state.weather = {}
        },

        [fetchWeather.fulfilled]: (state, action) => {

            state.weather = action.payload
        },
        [fetchAllWeather.fulfilled]: (state, action) => {
            state.status = 'success';
            state.allWeather = action.payload
        },

    }
})

export const { setWeatherToday } = weatherSlice.actions

export default weatherSlice.reducer