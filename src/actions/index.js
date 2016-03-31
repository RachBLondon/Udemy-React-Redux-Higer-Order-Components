import { CHANGE_AUTH } from './actionTypes';

export function authenticate(isLoggedIn){
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}
