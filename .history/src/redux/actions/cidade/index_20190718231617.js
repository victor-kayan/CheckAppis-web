import { GET_ALL_CIDADES_BY_UF, LOADING_CIDADE } from "./actionsTypes";
import Api from "../../../services/api";
import { uris } from "../../../assets";

export const getAllapicultor = uf => {
  console.log("===========================");
  console.log("      GET_ALL_CIDADE_BY_UF  ");
  console.log("===========================");

  return dispatch => {
    dispatch({
      type: LOADING_CIDADE,
      payload: {
        loadingCidade: true
      }
    });

    Api.get(uris.GET_ALL_APICULTORES, uf)
      .then(response => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_CIDADES_BY_UF,
          payload: {
            list_apicultor: response.data,
            loading: false
          }
        });
      })
      .catch(error => {
        dispatch({
          type: LOADING_CIDADE,
          payload: {
            loading: false,
            code: error.response
          }
        });
      });
  };
};
