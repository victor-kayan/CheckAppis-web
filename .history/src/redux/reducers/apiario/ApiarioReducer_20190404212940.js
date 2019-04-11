import { GET_ALL_APICULTORES, SAVE_APICULTOR, LOADING_APICULTOR, DELETE_APICULTOR, UPDATE_APICULTOR, GET_APICULTOR} from "../../actions/apicultorActions/actionsTypes";

const initialState = {
  list_apicultor: [],
  apicultor: null,
  loading: false,
  logged: false,
  code: null,
};
export const ApiarioReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_ALL_APIARIOS:
      return {
        ...state,
        list_apicultor: action.payload.list_apicultor,
        loading: action.payload.loading,
        code: action.payload.code
      };
    case LOADING_APIARIO:
      return {
        ...state,
        loading: action.payload.loading,
        code: action.payload.code,
      };

    default:
      return state;
  }
};
