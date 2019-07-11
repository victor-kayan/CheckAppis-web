import { GET_ALL_APICULTORES, SAVE_APICULTOR, LOADING_APICULTOR, DELETE_APICULTOR, UPDATE_APICULTOR, GET_APICULTOR} from "../../actions/apicultorActions/actionsTypes";

const initialState = {
  list_apicultor: [],
  apicultor: null,
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
        code: action.payload.code,
        message: action.payload.message
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
        message: action.payload.message
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
        //code: action.payload.code,
        message: action.payload.message
      };

    default:
      return state;
  }
};
