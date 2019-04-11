import { GET_ALL_APICULTORES, LOADING_APICULTOR, SAVE_APICULTOR } from "./actionsTypes";
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
                console.log(response.data.apicultores)
                dispatch({
                    type: GET_ALL_APICULTORES,
                    payload: {
                        list_apicultor: response.data.apicultores,
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
                        code: error.response.status,
                    }
                });
            });
    };
};

export const saveApicultor = ({ name, email, password, password_confirmation }) => {
    
    console.log("Salvar apicultor");
    console.log("Nome" , name);

    return dispatch => {
        console.log("SAVE_APICULTOR")
        dispatch({
            type: SAVE_APICULTOR,
            payload: {
                loading: true
            }
        });

        Api.post(uris.SAVE_APICULTOR, { name, email, password, password_confirmation } )
            .then(response => {

                console.log(response.data.status)
                
                dispatch({
                    type: SAVE_APICULTOR,
                    payload: {
                        loading: false,
                        code: response.data.status
                    },
                });
            })
            .catch(error => {
                console.log(error.data.status)

                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                }
                dispatch({
                    type: LOADING_APICULTOR,
                    payload: {
                        loading: false,
                        code: error.response.status,
                    }
                });
            });
    };
}