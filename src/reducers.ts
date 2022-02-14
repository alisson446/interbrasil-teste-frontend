import { combineReducers } from 'redux';
import App from './pages/App/reducer';
import Login from './pages/Login/reducer';

const rootReducer = combineReducers({
  App,
  Login
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
