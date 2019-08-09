import {
  GET_ALL_VISITAS_COLMEIA,
  LOADING_VISITA_COLMEIA,
  REQUEST_VISITA_ERROR,
  SAVE_INTERVENCAO_COLMEIA,
  DELETE_VISITA_COLMEIA
} from "./actionsTypes";
import Api from "../../../services/api";
import { uris } from "../../../assets";

export const saveIntervencaoApiario = ({
  descricao,
  apiario_id,
  data_inicio,
  data_fim
}) => {
  return dispatch => {
    dispatch({
      type: LOADING_VISITA_APIARIO,
      payload: {
        loadingVisita: true
      }
    });

    Api.post(uris.SAVE_INTERVENCAO_APIARIO, {
      descricao,
      apiario_id,
      data_inicio,
      data_fim
    })
      .then(response => {
        dispatch({
          type: SAVE_INTERVENCAO_APIARIO,
          payload: {
            loadingVisita: false,
            code: response.status,
            messageVisita: response.data.message
          }
        });
        dispatch(getAllApiariosVisitas());
      })
      .catch(error => {
        dispatch({
          type: REQUEST_VISITA_ERROR,
          payload: {
            loadingVisita: false,
            code: (error.response && error.response.status) || 500,
            messageVisita:
              (error.response && error.response.data.message) || ""
          }
        });
      });
  };
};

export const getAllApiariosVisitas = () => {
  return dispatch => {
    dispatch({
      type: LOADING_VISITA_COLMEIA,
      payload: {
        loadingVisita: true
      }
    });

    Api.get(uris.GET_ALL_VISITAS_COLMEIA)
      .then(response => {
        dispatch({
          type: GET_ALL_VISITAS_COLMEIA,
          payload: {
            visitasApiarios: response.data,
            loadingVisita: false,
            code: response.status
          }
        });
      })
      .catch(error => {
        dispatch({
          type: REQUEST_VISITA_ERROR,
          payload: {
            loadingVisita: false,
            code: (error.response && error.response.status) || 500
          }
        });
      });
  };
};

export const deleteVisitaApiario = (id) => {
  return dispatch => {
    dispatch({
      type: LOADING_VISITA_APIARIO,
      payload: {
        loadingVisita: true
      }
    });

    Api.delete(uris.DELETE_VISITA_APIARIO + id)
      .then(response => {
        dispatch({
          type: DELETE_VISITA_APIARIO,
          payload: {
            loadingVisita: false,
            code: response.status
          }
        });
        dispatch(getAllApiariosVisitas());
      })
      .catch(error => {
        dispatch({
          type: REQUEST_VISITA_ERROR,
          payload: {
            loadingVisita: false,
            code: (error.response && error.response.status) || 500
          }
        });
      });
  };
};

