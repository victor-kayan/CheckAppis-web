import { GET_ALL_APICULTORES } from "../../actions/apicultorActions/actionsTypes";

const initialState = {
  list_apicultor: [],
  loading: false,
  logged: false,
  codeErro: ''
};
export const ApicultorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_APICULTORES:
      return {
        ...state,
        user: action.payload.list_apicultor,
        loading: action.payload.loading,
        codeErro: action.payload.codeErro
      };
    default:
      return state;
  }
};
