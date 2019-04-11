import { LOGIN, LOADING, LOGOUT } from "../../actions/loginActions/actionsTypes";

const initialState = {
  user: {},
  loading: false,
  logged: false,
  token: '',
  codeErro: ''
};
export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: action.payload.loading,
        logged: action.payload.logged,
        token: action.payload.token,
        codeErro: action.payload.codeErro
      };
    // case LOGOUT:
    //   return {
    //     ...state,
    //     user: action.payload.user,
    //     loading: action.payload.loading,
    //     logged: action.payload.logged,
    //     token: action.payload.token
    //   };
    case LOADING:
      return {
        ...state,
        loading: action.payload.loading,
        codeErro: action.payload.codeErro,
        logged: action.payload.logged,
      };
    default:
      return state;
  }
};
