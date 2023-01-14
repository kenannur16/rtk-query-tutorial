import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nmb: 0,
  kenanArray :[],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    addNumber: (state) => {
      state.kenanArray.push(Math.round(Math.random()*10))
    },

    removeNumber: (state) => {
      state.kenanArray.pop()
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.nmb += 1
    },
    decrement: (state) => {
      state.nmb -= 1
    },
    incrementByAmount: (state, action) => {
      state.nmb += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addNumber, removeNumber } = counterSlice.actions

export default counterSlice.reducer