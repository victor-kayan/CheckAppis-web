import {
  GET_ALL_INTERVENCOES_APIARIO,
  LOADING_INTERVENCAO_APIARIO,
  REQUEST_INTEVENCAO_ERROR,
} from "../../actions/intervencoesApiario/actionsTypes";

const initialState = {
  loadingIntervencao: false,
  intervencoesApiarios: {},
  messageIntervencao: "",
  code: null
};
export const IntervencaoApiarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_INTERVENCOES_APIARIO:
      return {
        ...state,
        intervencoesApiarios: action.payload.intervencoesApiarios,
        loadingIntervencao: action.payload.loadingIntervencao,
        code: action.payload.code
      };
    case LOADING_INTERVENCAO_APIARIO:
      return {
        ...state,
        loadingIntervencao: action.payload.loadingIntervencao
      };
    case REQUEST_INTEVENCAO_ERROR:
      return {
        ...state,
        loadingIntervencao: action.payload.loadingIntervencao,
        code: action.payload.code,
        messageVisita: action.payload.messageVisita
      };
    default:
      return state;
  }
};
