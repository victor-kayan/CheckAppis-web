import {
  GET_ALL_INTERVENCOES_COLMEIA,
  LOADING_INTERVENCAO_COLMEIA,
  REQUEST_INTERVENCAO_ERROR,
  DELETE_INTERVENCAO_COLMEIA
} from "./actionsTypes";
import Api from "../../../services/api";
import { uris } from "../../../assets";

export const getAllColmeiasIntervencoes = () => {
  return dispatch => {
    dispatch({
      type: LOADING_INTERVENCAO_COLMEIA,
      payload: {
        loadingIntervencao: true
      }
    });

    Api.get(uris.GET_ALL_INTERVENCOES_COLMEIA)
      .then(response => {
        dispatch({
          type: GET_ALL_INTERVENCOES_APIARIO,
          payload: {
            intervencoesApiarios: response.data,
            loadingIntervencao: false,
            code: response.status
          }
        });
      })
      .catch(error => {
        dispatch({
          type: REQUEST_INTERVENCAO_ERROR,
          payload: {
            loadingIntervencao: false,
            code: (error.response && error.response.status) || 500
          }
        });
      });
  };
};

export const deleteIntervencaoApiario = (id) => {
  return dispatch => {
    dispatch({
      type: LOADING_INTERVENCAO_APIARIO,
      payload: {
        loadingIntervencao: true
      }
    });

    Api.delete(uris.DELETE_INTERVENCAO_APIARIO + id)
      .then(response => {
        dispatch({
          type: DELETE_INTERVENCAO_APIARIO,
          payload: {
            loadingIntervencao: false,
            code: response.status
          }
        });
        dispatch(getAllApiariosIntervencoes());
      })
      .catch(error => {
        dispatch({
          type: REQUEST_INTERVENCAO_ERROR,
          payload: {
            loadingIntervencao: false,
            code: (error.response && error.response.status) || 500
          }
        });
      });
  };
};



