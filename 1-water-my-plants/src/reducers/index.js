import {
    GET_API_START,
    GET_API_SUCCESS,
    GET_API_FAILURE
  } from "./../actions";


const initialState = {
    isFetching: false,
    error: "",
    credentials: {
        "username": "",    
        "password": "", 
        "phoneNumber": ""
    },
    api: []

};

function rootReducer(state = initialState, action) {
    console.log("rootReducer", action);
    switch (action.type) {
        case GET_API_START:
          return {
            ...state,
            error: "",
            isFetching: true
          };
        case GET_API_SUCCESS:
          return {
            ...state,
            api: action.payload,
            isFetching: false,
            error: ""
          };
        case GET_API_FAILURE:
          return {
            ...state,
            error: action.payload
          };
          case GET_API_START:
          return {
            ...state,
            error: "",
            isFetching: true
          };
        case GET_API_SUCCESS:
          return {
            ...state,
            api: action.payload,
            isFetching: false,
            error: ""
          };
        case GET_API_FAILURE:
          return {
            ...state,
            error: action.payload
          };
        default:
          return state;
      }

};

export default rootReducer;
