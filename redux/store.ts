import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice';
import cartSlice from './features/cart/cartSlice';
import userProfileSlice from './features/userProfile/userProfileSlice';

// create store
export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
      cart: cartSlice,
      userProfile: userProfileSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState'] >
export type AppDispatch = AppStore['dispatch']