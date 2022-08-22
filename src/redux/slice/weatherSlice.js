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
    'weather/fetchWeatherStatus',
    async (city) => {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Lviv&appid=85ca95bfff9c0b82c7bff34257971b11
        `)
        return data;
    }
)


const initialState = {
    weather: {},
    allWeather: [],
    status: 'loading'
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeather(state, action) {
            state.weather = action.payload
        }
    },
    extraReducers: {
        [fetchWeather.pending]: (state, action) => {
            state.status = 'loading';
            state.weather = {}
        },
        [fetchWeather.fulfilled]: (state, action) => {
            state.status = 'success';
            state.weather = action.payload
        },

        [fetchAllWeather.fulfilled]: (state, action) => {
            state.allWeather = action.payload
        },

    }
})

export const { setWeather } = weatherSlice.actions

export default weatherSlice.reducer