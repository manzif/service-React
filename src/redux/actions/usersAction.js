import { FETCH_USERS } from './types';

export const fetchUsers = () => dispatch => {
    fetch('https://e-services-manzi.herokuapp.com/api/users')
    .then(res => res.json())
    .then(users => 
      dispatch({
        type: FETCH_USERS,
        payload: users
      })
    );
};
