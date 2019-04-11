import { GET_ALL_APICULTORES, LOADING_APICULTOR } from "./actionsTypes";
import Api from "../../../services/api"
import { uris } from "../../../assets";

export const getAllapicultor = () => {

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
                console.log(response.data)
                dispatch({
                    type: GET_ALL_APICULTORES,
                    payload: {
                        list_apicultor: "Claiud",
                        loading: false,
                    },
                });
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                }
                dispatch({
                    type: LOADING_APICULTOR,
                    payload: {
                        loading: false,
                        codeErro: error.response.status,
                    }
                });
            });
    };
};
