import { Action, createAction, props } from '@ngrx/store';
import { IUser, UserJWT } from 'src/app/utils/interface';

export const USER_LOGIN = createAction('[USER] login', props<{ user: UserJWT }>());
export const USER_JWT = createAction('[USER] jwt', props<{ JWT: string }>());
