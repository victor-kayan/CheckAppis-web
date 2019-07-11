import { GET_ALL_APIARIOS, LOADING_APIARIO, SAVE_APIARIO } from "./actionsTypes";
import Api from "../../../services/api"
import { uris } from "../../../assets";

export const getAllapiarios = () => {

    console.log("Lista de apiarios");

    return dispatch => {
        console.log("GET_ALL_APIARIO")
        dispatch({
            type: GET_ALL_APIARIOS,
            payload: {
                loading: true
            }
        });

        Api.get(uris.GET_ALL_APIARIOS)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: GET_ALL_APIARIOS,
                    payload: {
                        list_apiario: response.data.apiarios,
                        loading: false,
                    },
                });
            })
            .catch(error => {
                dispatch({
                    type: LOADING_APIARIO,
                    payload: {
                        loading: false,
                        code: error.response,
                    }
                });
            });
    };
};


export const saveApicultor = ({ nome, endereco }) => {

    return dispatch => {
        console.log("SAVE_APIARIO")
        dispatch({
            type: SAVE_APIARIO,
            payload: {
                loading: true
            }
        });

        Api.post(uris.SAVE_APIARIO, { nome, endereco })
            .then(response => {
                console.log(response.status)
                dispatch({
                    type: SAVE_APIARIO,
                    payload: {
                        loading: false,
                        code: response.status
                    },
                });
                dispatch(getAllapiarios());
            })
            .catch(error => {
                console.log(error.data)

                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                }
                dispatch({
                    type: LOADING_APIARIO,
                    payload: {
                        loading: false,
                        code: error.response.status,
                    }
                });
            });
    };
}

