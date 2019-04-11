import { CLICK_UPDATE_VALUE, CLICK_RESET_VALUE } from '../actions/actionTypes';

const initialState = {
  newValue: 'Atualizado via Redux!',
  newValue2: 'Redux',
  newValue3: 'Redux 2',
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue,
        newValue2: 'Claudio'
      };
      case CLICK_RESET_VALUE:
      return {
        ...state,
        newValue: action.newValue,
      };
      case CLICK_MEUNOME_VALUE:
      return {
        ...state,
        newValue: action.newValue,
      };

    default:
      return state;
  }
};