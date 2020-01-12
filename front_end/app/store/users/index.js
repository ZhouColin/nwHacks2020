import {createSlice} from '@reduxjs/toolkit';
import {data} from './data';
import {filter} from 'ramda';

const isNegativeUser = user => {
  return user.overallScore < -0.2;
};

const isPositiveUser = user => {
  return user.overallScore > 0.2;
};

const isNeutralUser = user => {
  return user.overallScore >= -0.2 && user.overallScore <= 0.22;
};

const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState: {allUsers: {}, filteredUsers: {}},
  reducers: {
    filterUsers: (state, {payload}) => {
      switch (payload.filterBy) {
        case 'Negative':
          return {
            allUsers: state.allUsers,
            filteredUsers: filter(isNegativeUser, state.allUsers),
          };
        case 'Positive':
          return {
            allUsers: state.allUsers,
            filteredUsers: filter(isPositiveUser, state.allUsers),
          };

        case 'Neutral':
          return {
            allUsers: state.allUsers,
            filteredUsers: filter(isNeutralUser, state.allUsers),
          };

        case 'All':
          return {allUsers: state.allUsers, filteredUsers: state.allUsers};
        default:
          return state;
      }
    },
    filterNewUsers: (state, {payload}) => {
      switch (payload.filterBy) {
        case 'Negative':
          return {
            allUsers: payload.allUsers,
            filteredUsers: filter(isNegativeUser, payload.allUsers),
          };
        case 'Positive':
          return {
            allUsers: payload.allUsers,
            filteredUsers: filter(isPositiveUser, payload.allUsers),
          };

        case 'Neutral':
          return {
            allUsers: payload.allUsers,
            filteredUsers: filter(isNeutralUser, payload.allUsers),
          };

        case 'All':
          return {allUsers: payload.allUsers, filteredUsers: payload.allUsers};
        default:
          return state;
      }
    },
    setUsers: (state, {payload: {allUsers, filteredUsers}}) => ({
      allUsers,
      filteredUsers,
    }),
  },
});

export const {
  actions: allUsersActions,
  reducer: allUsersReducer,
} = allUsersSlice;
