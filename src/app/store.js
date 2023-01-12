import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'
import { jokesApi } from '../query/apiSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [jokesApi.reducerPath]:jokesApi.reducer,
  }, 
})