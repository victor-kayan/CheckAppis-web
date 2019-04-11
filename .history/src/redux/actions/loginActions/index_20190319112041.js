import { LOGIN, LOADING, LOGOUT } from "./actionsTypes";
import Api from "../../../services/api"
import { uris, constants } from "../../../assets";

export const login = ({ email, password }) => {
  console.log("LOGIN");
  return dispatch => {
    dispatch({
      type: LOGIN,
      payload: {
        loading: true
      }
    });

    Api.post(uris.LOGIN, { email, password })
      .then(response => {

        localStorage.setItem('token', response.data.token)
        Api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

        dispatch({
          type: LOGIN,
          payload: {
            loading: false,
            logged: true,
            token: response.data.token
          },
        });
      })
      .catch(error => {
        //   alert('Aqui')
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
        }
        dispatch({
          type: LOADING,
          payload: {
            loading: false,
            logged: false,
          }
        });
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
            loading: false,
          }
        });
      });
  };
};
