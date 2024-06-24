import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import registrationReducer from '../features/registration/registrationSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    registration: registrationReducer,
  },
});
