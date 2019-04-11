import { GET_ALL_APICULTORES, LOADING_APICULTOR, SAVE_APICULTOR, DELETE_APICULTOR, UPDATE_APICULTOR, GET_APICULTOR } from "./actionsTypes";
import Api from "../../../services/api"
import { uris } from "../../../assets";

export const getAllapiarios = () => {

    console.log("Lista de apicultores");

    return dispatch => {
        console.log("GET_ALL_APICULTORES")
        dispatch({
            type: GET_ALL_APICULTORES,
            payload: {
                loading: true
            }
        });

        Api.get(uris.GET_ALL_APICULTORES)
            .then(response => {
                dispatch({
                    type: GET_ALL_APICULTORES,
                    payload: {
                        list_apicultor: response.data.apicultores,
                        loading: false,
                    },
                });
            })
            .catch(error => {
                dispatch({
                    type: LOADING_APICULTOR,
                    payload: {
                        loading: false,
                        code: error.response,
                    }
                });
            });
    };
};
