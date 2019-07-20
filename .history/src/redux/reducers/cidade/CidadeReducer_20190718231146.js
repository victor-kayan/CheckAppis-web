import { GET_ALL_CIDADES_BY_UF } from "../../actions/apicultorActions/actionsTypes";

const initialState = {
  list_cidades: [],
  loadingCidade: false,
  message: ''
};
export const CidadeReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_ALL_CIDADES_BY_UF:
      return {
        ...state,
        list_apicultor: action.payload.list_apicultor,
        loading: action.payload.loading,
        code: action.payload.code,
      };

    case LOADING_CIDADE:
      return {
        ...state,
        loadingCidade: action.payload.loadingCidade,
        message: action.payload.message,
      };

    default:
      return state;
  }
};
