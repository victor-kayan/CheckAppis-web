import { GET_ALL_APICULTORES } from "./actionsTypes";
import Api from "../../../services/api"
import { uris} from "../../../assets";

export const apicultores = () => {
 
  console.log("Lista de apicultores");
 
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
