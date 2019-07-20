import { GET_ALL_CIDADES_BY_UF, LOADING_CIDADE } from "./actionsTypes";
import Api from "../../../services/api";
import { uris } from "../../../assets";

export const getAllapicultor = page => {
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

    Api.get(uris.GET_ALL_APICULTORES, { params: { page } })
      .then(response => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_APICULTORES,
          payload: {
            list_apicultor: response.data,
            loading: false
          }
        });
      })
      .catch(error => {
        dispatch({
          type: LOADING_APICULTOR,
          payload: {
            loading: false,
            code: error.response
          }
        });
      });
  };
};

export const saveApicultor = ({
  name,
  email,
  password,
  password_confirmation
}) => {
  return dispatch => {
    console.log("===========================");
    console.log("      SAVE APICULTOR       ");
    console.log("===========================");

    dispatch({
      type: SAVE_APICULTOR,
      payload: {
        loading: true
      }
    });

    Api.post(uris.SAVE_APICULTOR, {
      name,
      email,
      password,
      password_confirmation
    })
      .then(response => {
        dispatch({
          type: SAVE_APICULTOR,
          payload: {
            loading: false,
            code: response.status
          }
        });
        dispatch(getAllapicultor());
      })
      .catch(error => {
        dispatch({
          type: LOADING_APICULTOR,
          payload: {
            loading: false,
            code: error.response.status,
            message: error.response.data.message
          }
        });
      });
  };
};

export const getApicultor = id => {
  console.log("===========================");
  console.log("      GET APICULTOR        ");
  console.log("===========================");
  return dispatch => {
    dispatch({
      type: GET_APICULTOR,
      payload: {
        loading: true
      }
    });

    Api.get(uris.GET_APICULTOR + id)
      .then(response => {
        dispatch({
          type: GET_APICULTOR,
          payload: {
            loading: false,
            code: response.status,
            apicultor: response.apicultor
          }
        });
      })
      .catch(error => {
        dispatch({
          type: LOADING_APICULTOR,
          payload: {
            loading: false,
            code: error.response.status
          }
        });
      });
  };
};

export const updateApicultor = ({ id, request }) => {
  console.log("===========================");
  console.log("      UPDATE APICULTOR     ");
  console.log("===========================");
  return dispatch => {
    dispatch({
      type: UPDATE_APICULTOR,
      payload: {
        loading: true
      }
    });

    Api.put(uris.UPDATE_APICULTOR + id, request)
      .then(response => {
        dispatch({
          type: UPDATE_APICULTOR,
          payload: {
            loading: false,
            code: response.status
          }
        });
        dispatch(getAllapicultor());
      })
      .catch(error => {
        console.log(error.response.data.message);
        dispatch({
          type: LOADING_APICULTOR,
          payload: {
            loading: false,
            code: error.response.status,
            message: error.response.data.message
          }
        });
      });
  };
};

export const deleteApicultor = ({ id }) => {
  console.log("===========================");
  console.log("      DELETE APICULTOR     ");
  console.log("===========================");
  return dispatch => {
    dispatch({
      type: DELETE_APICULTOR,
      payload: {
        loading: true
      }
    });

    Api.delete(uris.DELETE_APICULTOR + id)
      .then(response => {
        console.log("Removeu:");
        dispatch({
          type: DELETE_APICULTOR,
          payload: {
            loading: false,
            code: response.status,
            message: response.data.message
          }
        });
        dispatch(getAllapicultor());
      })
      .catch(error => {
        dispatch({
          type: LOADING_APICULTOR,
          payload: {
            loading: false,
            code: error.response.status,
            message: error.response.data.message
          }
        });
      });
  };
};
