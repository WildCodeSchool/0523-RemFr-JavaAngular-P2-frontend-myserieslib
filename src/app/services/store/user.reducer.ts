import { createSelector } from '@ngrx/store';
import { IUser, UserJWT } from 'src/app/utils/interface';
import { initialState } from './initialState';

export interface UserState {
  readonly user: UserJWT;
}

export const selectUserState = (state: any) => state;
export const selectUser = createSelector(selectUserState, (state: any) => {
  return state.userState.user;
});
export const selectJWT = createSelector(selectUserState, (state: any) => state.userState.user.JWT);

export function reducer(state = initialState, action: any): UserState {
  switch (action.type) {
    case 'USER_LOGIN':
      localStorage.setItem('jwt', action.payload.JWT);
      return { ...state, user: action.payload };
    case 'USER_JWT':
      return { ...state, user: { ...state.user, JWT: action.payload } };
    default:
      return state;
  }
}
