import { GET_ALL_APICULTORES } from "./actionsTypes";
import Api from "../../../services/api"
import { uris} from "../../../assets";

export const apicultor = () => {
 
  console.log("Lista de apicultores");
 
  return dispatch => {
    dispatch({
      type: GET_ALL_APICULTORES,
      payload: {
        loading: true
      }
    });

    Api.post(uris.GET_ALL_APICULTORES)
      .then(response => {
        dispatch({
          type: GET_ALL_APICULTORES,
          payload: {
            user: response.data,
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
          type: LOADING,
          payload: {
            loading: false,
            codeErro: error.response.status,
          }
        });
      });
  };
};
