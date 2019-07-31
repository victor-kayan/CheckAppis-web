import {
  GET_ALL_APIARIOS,
  LOADING_APIARIO,
  GET_CIDADES_UF,
  SAVE_APIARIO,
  SAVE_APIARIO_ERROR
} from "../../actions/apiarioActions/actionsTypes";

const initialState = {
  listApiarios: [],
  apiario: null,
  loadingApiario: false,
  code: null,
  cidades: null,
  messageApiario: null
};
export const ApiarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_APIARIOS:
      return {
        ...state,
        listApiarios: action.payload.listApiarios,
        loadingApiario: action.payload.loadingApiario,
        code: action.payload.code
      };
    case SAVE_APIARIO:
      return {
        ...state,
        apiario: action.payload.apiario,
        loadingApiario: action.payload.loadingApiario,
        code: action.payload.code,
        messageApiario: action.payload.messageApiario
      };
    case SAVE_APIARIO_ERROR:
      return {
        ...state,
        loadingApiario: action.payload.loadingApiario,
        code: action.payload.code,
        messageApiario: action.payload.messageApiario
      };
    case LOADING_APIARIO:
      return {
        ...state,
        loadingApiario: action.payload.loadingApiario,
        code: action.payload.code
      };

    default:
      return state;
  }
};
