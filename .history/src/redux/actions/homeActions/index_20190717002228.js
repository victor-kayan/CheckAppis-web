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
                    type: LOADING_HOME,
                    payload: {
                        loadingHome: false,
                        code: error.response,
                    }
                });
            });
    };
};
