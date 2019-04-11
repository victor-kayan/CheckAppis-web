import { GET_ALL_APICULTORES, SAVE_APICULTOR } from "../../actions/apicultorActions/actionsTypes";

const initialState = {
  list_apicultor: [],
  loading: false,
  logged: false,
  codeErro: '',
  codeSucces: ''
};
export const ApicultorReducer = (state = initialState, action) => {

  console.log(action);

  switch (action.type) {
    case GET_ALL_APICULTORES:
      return {
        ...state,
        list_apicultor: action.payload.list_apicultor,
        loading: action.payload.loading,
        codeErro: action.payload.codeErro
      };

    case SAVE_APICULTOR:
      return {
        ...state,
        //list_apicultor: action.payload.list_apicultor,
        loading: action.payload.loading,
        //codeErro: action.payload.codeErro
      };
    default:
      return state;
  }
};
