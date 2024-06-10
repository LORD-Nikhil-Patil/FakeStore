import { configureStore, Tuple  } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({ reducer: rootReducer,   middleware: () => new Tuple(),})

export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

