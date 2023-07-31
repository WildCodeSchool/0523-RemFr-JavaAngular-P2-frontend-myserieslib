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
      return { ...state, user: action.payload, role : action.payload.role.name  };
    case 'USER_JWT':
      return { ...state, user: { ...state.user, JWT: action.payload }};
    case 'USER':
      return { ...state, user: { ...state.user, ...action.payload }};
    case 'USER_LOGOUT':
      localStorage.removeItem('jwt');
      localStorage.removeItem('nickname');
      localStorage.removeItem('pictureUrl');
      localStorage.removeItem('email');
      return { ...state, user: { ...initialState } };
    default:
      return state;
  }
}
