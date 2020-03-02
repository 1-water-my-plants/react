import axios from "axios";

export const GET_API_START = 'GET_API';
export const GET_API_SUCCESS = 'GET_API_SUCCESS';
export const GET_API_FAILURE = 'GET_API_FAILURE';

export const REG_USER_START = 'REG_USER';
export const REG_USER_SUCCESS = 'REG_USER_SUCCESS';
export const REG_USER_FAILURE = 'REG_USER_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const regUser = () => dispatch => {
//     dispatch({ type: REG_USER_START });
//     axios
//       .post('https://webpt9-water-my-plants.herokuapp.com/api/auth/register')
//       .then(res =>
//         dispatch({ type: REG_USER_SUCCESS, payload: res.data.results })
//       )
//       .catch(err => dispatch({ type: REG_USER_FAILURE, payload: err }));
//   };

  export const getApi = () => dispatch => {
    dispatch({ type: GET_API_START });
    axios
      .get(`https://webpt9-water-my-plants.herokuapp.com/`)
      .then(res => {
        console.log(res.data, "res.data");
        dispatch({ type: GET_API_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err.response, "error message!!");
        dispatch({
          type: GET_API_FAILURE,
          payload: `${err.response.status} ${err.response.data}`
        });
      });
  };

  