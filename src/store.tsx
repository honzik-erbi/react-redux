import { configureStore } from '@reduxjs/toolkit'
import PizzaSlice from './pages/PizzaOrder/PizzaSlice'

export default configureStore({
  reducer: {
    pizza: PizzaSlice
  }
})