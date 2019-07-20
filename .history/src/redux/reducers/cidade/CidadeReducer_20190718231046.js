import { GET_ALL_CIDADES_BY_UF } from "../../actions/apicultorActions/actionsTypes";

const initialState = {
  list_cidades: [],
  loadingCidade: false,
  message: ''
};
export const ApicultorReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_ALL_APICULTORES:
      return {
        ...state,
        list_apicultor: action.payload.list_apicultor,
        loading: action.payload.loading,
        code: action.payload.code,
      };

    case SAVE_APICULTOR:
      return {
        ...state,
        loading: action.payload.loading,
        code: action.payload.code,
        message: action.payload.message
      };
    case UPDATE_APICULTOR:
      return {
        ...state,
        loading: action.payload.loading,
        code: action.payload.code,
        message: action.payload.message
      };
    case GET_APICULTOR:
      return {
        ...state,
        loading: action.payload.loading,
        code: action.payload.code,
        apicultor: action.payload.apicultor,
      };
    case DELETE_APICULTOR:
      return {
        ...state,
        loading: action.payload.loading,
        code: action.payload.code,
        message: action.payload.message
      };
    case LOADING_APICULTOR:
      return {
        ...state,
        loading: action.payload.loading,
        code: action.payload.code,
      };

    default:
      return state;
  }
};
