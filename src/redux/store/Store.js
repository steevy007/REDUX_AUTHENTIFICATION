import { createStore,combineReducers } from 'redux'
import login_reducers from '../reducers/LoginReducers'
import registerReducer from '../reducers/RegisterReducers'
const rootReducers=combineReducers({
    login:login_reducers,
    users:registerReducer
})
const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
export default store