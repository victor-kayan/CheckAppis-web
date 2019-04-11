import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
    newValue: 'Atualizado via Redux!',
    newValue2: 'Redux'
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue,
        newValue2: action.newValue
      };
    default:
      return state;
  }
};