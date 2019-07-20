import { LOGIN, LOADING, LOGOUT, LOGIN_FACEBOOK } from "../../actions/userActions/actionsTypes";
import { LOADING_HOME } from "../../actions/homeActions/actionsTypes";

const initialState = {
  data: {},
  loadingHome: false,
  code: ''
};
export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        loading: action.payload.loading,
        logged: action.payload.logged,
        token: action.payload.token,
      };
    case LOADING_HOME:
      return {
        ...state,
        loadingHome: action.payload.loadingHome,
        code: action.payload.code,
      };
    default:
      return state;
  }
};
