import { LOGIN, LOADING, LOGOUT } from "./actionsTypes";
import Api from "../../../services/api"
import { uris} from "../../../assets";

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
            user: response.data.user,
            loading: false,
            logged: true,
            token: response.data.token,
          },
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
            loading: false,
            logged: false,
            codeErro: error.response.status,
          }
        });
      });
  };
};

export const logout = () => {
  console.log("LOGOUT");
  localStorage.removeItem('token');
  return dispatch => {
    
    dispatch({
      type: LOADING,
      payload: {
        loading: false
      }
    });

    Api.post('http://bee-check.com.br/api/auth/logout/32')
      .then(response => {
        console.log(response.status);
        dispatch({
          type: LOGOUT,
          payload: {
            user: response.data.user,
            loading: false,
            logged: false,
            token: response.data.token
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
