import * as types from './types';

export function menuAction(menu) {
  return {
    type: types.GET_MENU,
    menu,
  };
}
