import {  GET_ALL_APIARIOS, LOADING_APIARIO } from "../../actions/apicultorActions/actionsTypes";

const initialState = {
    list_apiario: [],
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
                list_apiario: action.payload.list_apiario,
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
