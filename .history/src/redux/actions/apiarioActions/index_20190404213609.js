import { GET_ALL_APIARIOS, LOADING_APIARIO} from "./actionsTypes";
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

