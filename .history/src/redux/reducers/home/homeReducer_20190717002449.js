import { LOGIN, LOADING, LOGOUT, LOGIN_FACEBOOK } from "../../actions/userActions/actionsTypes";

const initialState = {
  data: {},
  loadingHome: false,
  code: ''
};
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        loading: action.payload.loading,
        logged: action.payload.logged,
        token: action.payload.token,
      };
    case LOGIN_FACEBOOK:
      return {
        ...state,
        user: action.payload.user,
        loadingFacebook: action.payload.loadingFacebook,
        logged: action.payload.logged,
        token: action.payload.token,
      };
    case LOGOUT:
      return {
        ...state,
        user: action.payload.user,
        loading: action.payload.loading,
        logged: action.payload.logged,
        token: action.payload.token
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload.loading,
        loadingFacebook: action.payload.loadingFacebook,
        code: action.payload.code,
        logged: action.payload.logged,
      };
    default:
      return state;
  }
};
