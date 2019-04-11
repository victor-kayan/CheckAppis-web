import { LOGIN, LOADING, LOGOUT } from "../../actions/loginActions/actionsTypes";

const initialState = {
  user: {},
  loading: false,
  logged: false,
  token: '',
  teste: 'Aqui'
};
export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: action.payload.loading,
        logged: action.payload.logged,
        token: action.payload.token,
        teste: action.payload.teste
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
      };
    default:
      return state;
  }
};