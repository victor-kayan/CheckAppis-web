import {
  GET_ALL_VISITAS_APIARIO,
} from "./actionsTypes";
import Api from "../../../services/api";
import { uris } from "../../../assets";

export const getAllApiariosVisitas = () => {
  return dispatch => {
    dispatch({
      type: LOADING_VISITA,
      payload: {
        loading: true
      }
    });

    Api.get(uris.GET_ALL_VISITAS_APIARIO, { email, password })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.user.name);
        localStorage.setItem("primeiroAcesso", true);
        localStorage.setItem("foto", response.data.user.foto);
        localStorage.setItem("token_relatorios", response.data.token_relatorios)

        Api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;

        dispatch({
          type: LOGIN,
          payload: {
            user: response.data.user,
            loading: false,
            autenticado: true,
            token: response.data.token,
            code: response.status
          }
        });
      })
      .catch(error => {
        dispatch({
          type: LOADING,
          payload: {
            loading: false,
            autenticado: false,
            code: (error.response && error.response.status) || 500
          }
        });
      });
  };
};

export const loginFacebook = ({ token }) => {
  return dispatch => {
    dispatch({
      type: LOGIN_FACEBOOK,
      payload: {
        loadingFacebook: true
      }
    });

    Api.post(uris.LOGIN_FACEBOOK, { token })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.user.name);
        localStorage.setItem("foto", response.data.user.foto);

        Api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("token")}`;

        dispatch({
          type: LOGIN_FACEBOOK,
          payload: {
            user: response.data.user,
            loadingFacebook: false,
            autenticado: true,
            token: response.data.token
          }
        });
      })
      .catch(error => {
        dispatch({
          type: LOADING,
          payload: {
            loadingFacebook: false,
            autenticado: false
            //code: error.response.status,
          }
        });
      });
  };
};

export const logout = () => {
  localStorage.removeItem("token");

  return dispatch => {
    dispatch({
      type: LOADING,
      payload: {
        loading: false
      }
    });

    Api.post(uris.LOGOUT)
      .then(response => {
        console.log(response.data);
        dispatch({
          type: LOGOUT,
          payload: {
            user: response.data.user,
            loading: false,
            autenticado: false,
            token: response.data.token
          }
        });
      })
      .catch(error => {
        dispatch({
          type: LOADING,
          payload: {
            loading: false
          }
        });
      });
  };
};
