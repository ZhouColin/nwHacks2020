import {combineReducers} from 'redux';
import {userReducer} from './user';
import {allUsersReducer} from './users';

export default combineReducers({
  user: userReducer,
  allUsers: allUsersReducer,
});
