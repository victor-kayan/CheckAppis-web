import { CLICK_UPDATE_VALUE ,  CLICK_RESET_VALUE, CLICK_MEUNOME_VALUE } from '../actions/actionTypes';

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value,
});

export const clickButton2 = value => ({
    type: CLICK_RESET_VALUE,
    newValue: '',
});

export const clickButton3 = value => ({
    type: CLICK_MEUNOME_VALUE,
    newValue: 'Claudio',
});






