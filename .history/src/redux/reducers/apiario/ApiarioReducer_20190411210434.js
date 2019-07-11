import { GET_ALL_APIARIOS, LOADING_APIARIO } from "../../actions/apiarioActions/actionsTypes";

const initialState = {
    list_apiario: [],
    apiario: null,
    loading: false,
    code: null,
    cidades: null
};
export const ApiarioReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_APIARIOS:
            return {
                ...state,
                list_apiario: action.payload.list_apiario,
                loading: action.payload.loading,
                code: action.payload.code
            };
        case GET_CIDADES_UF:
            return {
                ...state,
                cidades: action.payload.cidades,
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
