import { Action, createAction, props } from '@ngrx/store';
import { IUser, UserJWT } from 'src/app/utils/interface';

export const USER_LOGIN = createAction('[USER] login', props<{ user: UserJWT }>());
export const USER_JWT = createAction('[USER] jwt', props<{ JWT: string }>());
export const USER = createAction('[USER] nickname', props<{ nickname: string; email: string; pictureUrl: string }>());
export const USER_LOGOUT = createAction('[USER] logout');
