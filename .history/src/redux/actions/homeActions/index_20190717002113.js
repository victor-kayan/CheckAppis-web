import { LOADING_HOME, GET_ALL_INFO_HOME } from "./actionsTypes";
import Api from "../../../services/api"
import { uris } from "../../../assets";

export const getAllInfoHome = () => {

    console.log("Home do sistema");

    return dispatch => {
        console.log("GET_ALL_INFO_HOME")
        dispatch({
            type: LOADING_HOME,
            payload: {
                loadingHome: true
            }
        });

        Api.get(uris.GET_ALL_INFO_HOME)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: GET_ALL_INFO_HOME,
                    payload: {
                        home: response.data.data,
                        loadingHome: false,
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


export const saveApiario = ({ nome, endereco }) => {

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

export const cidades = (uf) => {
    console.log('UFFFFF', uf)
    return dispatch => {
        console.log("CIDADES")
        dispatch({
            type: GET_CIDADES_UF,
            payload: {
                loading: true
            }
        });

        Api.get(uris.GET_CIDADES_UF + uf)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: GET_CIDADES_UF,
                    payload: {
                        cidades: response.data.cidades,
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

