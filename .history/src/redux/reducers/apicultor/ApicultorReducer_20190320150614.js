import { GET_ALL_APICULTORES } from "../../actions/apicultorActions/actionsTypes";

const initialState = {
  list_apicultor: {},
  loading: false,
  logged: false,
  codeErro: ''
};
export const ApicultorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_APICULTORES:
      return {
        ...state,
        user: action.payload.user,
        loading: action.payload.loading,
        logged: action.payload.logged,
        token: action.payload.token,
        codeErro: action.payload.codeErro
      };
    default:
      return state;
  }
};
