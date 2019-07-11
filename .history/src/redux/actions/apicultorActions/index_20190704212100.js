import { GET_ALL_APICULTORES, LOADING_APICULTOR, SAVE_APICULTOR, DELETE_APICULTOR, UPDATE_APICULTOR, GET_APICULTOR } from "./actionsTypes";
import Api from "../../../services/api"
import { uris } from "../../../assets";

export const getAllapicultor = () => {

    console.log("===========================")
    console.log("      GET_ALL_APICULTORES  ")
    console.log("===========================")

    return dispatch => {
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
                        list_apicultor: response.data.data,
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

export const saveApicultor = ({ name, email, password, password_confirmation }) => {

    return dispatch => {

        console.log("===========================")
        console.log("      SAVE APICULTOR       ")
        console.log("===========================")

        dispatch({
            type: SAVE_APICULTOR,
            payload: {
                loading: true
            }
        });

        Api.post(uris.SAVE_APICULTOR, { name, email, password, password_confirmation })
            .then(response => {
                dispatch({
                    type: SAVE_APICULTOR,
                    payload: {
                        loading: false,
                        code: response.status
                    },
                });
                dispatch(getAllapicultor());
            })
            .catch(error => {
                console.log('Error: ', error.response.data.message)
                dispatch({
                    type: LOADING_APICULTOR,
                    payload: {
                        loading: false,
                        code: error.response.status,
                        message: error.response.data.message
                    }
                });
            });
    };
}

export const getApicultor = ( id ) => {
    console.log("===========================")
    console.log("      GET APICULTOR        ")
    console.log("===========================")
    return dispatch => {
        dispatch({
            type: GET_APICULTOR,
            payload: {
                loading: true
            }
        });

        Api.get(uris.GET_APICULTOR + id)
            .then(response => {
                console.log(response)
                dispatch({
                    type: GET_APICULTOR,
                    payload: {
                        loading: false,
                        code: response.status,
                        apicultor: response.apicultor
                    },
                });
            })
            .catch(error => {
                console.log(error.data)

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


export const updateApicultor = ( {id, request} ) => {
    console.log("===========================")
    console.log("      UPDATE APICULTOR     ")
    console.log("===========================")
    return dispatch => {
        console.log("UPDATE_APICULTOR", id)
        dispatch({
            type: UPDATE_APICULTOR,
            payload: {
                loading: true
            }
        });

        Api.put(uris.UPDATE_APICULTOR+id,  request)
            .then(response => {
                console.log(response)
                dispatch({
                    type: DELETE_APICULTOR,
                    payload: {
                        loading: false,
                        code: response.status
                    },
                });
                dispatch(getAllapicultor());
            })
            .catch(error => {
                console.log(error.data)

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

export const deleteApicultor = ({ id }) => {

    return dispatch => {
        console.log("DELETE_APICULTOR", id)
        dispatch({
            type: DELETE_APICULTOR,
            payload: {
                loading: true
            }
        });

        Api.delete(uris.DELETE_APICULTOR + id)
            .then(response => {
                dispatch({
                    type: DELETE_APICULTOR,
                    payload: {
                        loading: false,
                        code: response.status
                    },
                });
                dispatch(getAllapicultor());
            })
            .catch(error => {
                console.log(error.data)

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