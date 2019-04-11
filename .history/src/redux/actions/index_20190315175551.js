import { CLICK_UPDATE_VALUE ,  CLICK_UPDATE_VALUE } from '../actions/actionTypes';

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value,
    newValue2: value
});

export const clickButton2 = value => ({
    type: CLICK_RESET_VALUE,
    newValue: value,
    newValue2: value
});