import { combineReducers } from 'redux'
import user from './reducers/user'
import policy from './reducers/policy'

export default combineReducers({
    user,
    policy
});