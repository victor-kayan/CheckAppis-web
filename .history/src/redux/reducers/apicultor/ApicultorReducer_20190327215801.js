import { GET_ALL_APICULTORES, SAVE_APICULTOR, LOADING_APICULTOR, DELETE_APICULTOR, UPDATE_APICULTOR } from "../../actions/apicultorActions/actionsTypes";

const initialState = {
  list_apicultor: [],
  loading: false,
  logged: false,
  code: null,
};
export const ApicultorReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_ALL_APICULTORES:
      return {
        ...state,
        list_apicultor: action.payload.list_apicultor,
        loading: action.payload.loading,
        code: action.payload.code
      };

    case SAVE_APICULTOR:
      return {
        ...state,
        loading: action.payload.loading,
        code: action.payload.code
      };
    case UPDATE_APICULTOR:
      return {
        ...state,
        loading: action.payload.loading,
        code: action.payload.code
      };
    case GET_APICULTOR:
      return {
        ...state,
        loading: action.payload.loading,
        code: action.payload.code
      };
    case DELETE_APICULTOR:
      return {
        ...state,
        loading: action.payload.loading,
        code: action.payload.code
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
