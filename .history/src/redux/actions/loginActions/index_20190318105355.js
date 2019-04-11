import { LOGIN, LOADING, LOGOUT } from "./actionsType";
import Api from "../../../services/api"
import { uris, constants } from "../../../assets";

export const login = ({ email, password }) => {
  console.log("LOGIN");
  return dispatch => {
    dispatch({
      type: LOADING,
      payload: {
        loading: true
      }
    });
    Api.post(uris.LOGIN, { email, password })
      .then(response => {
        console.log(response.status);
        Api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        dispatch({
          type: LOGIN,
          payload: {
            loading: false,
            logged: true,
            token: response.data.token
          }
        });
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
        }
        dispatch({
          type: LOADING,
          payload: {
            logged: false,
            loading: false
          }
        });
        throw error;
      });
  };
};

export const logout = () => {
  console.log("LOGOUT");
  return dispatch => {
    dispatch({
      type: LOADING,
      payload: {
        loading: false
      }
    });

    Api.post(uris.LOGOUT)
      .then(response => {
        console.log(response.status);
        AsyncStorage.removeItem(`@beecheckApp:${constants.ACCESS_TOKEN}`);
        dispatch({
          type: LOGOUT,
          payload: {
            user: {},
            loading: false,
            logged: false,
            token: ""
          }
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: LOADING,
          payload: {
            loading: false
          }
        });
        throw error;
      });
  };
};
