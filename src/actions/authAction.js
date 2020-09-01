import * as actionTypes from './actionTypes';

export const setAuth = (detail) => {
  return {
    type: actionTypes.SET_AUTH,
    detail: detail,
  };
};

export const removeAuth = () => {
  return {
    type: actionTypes.REMOVE_AUTH,
  };
};