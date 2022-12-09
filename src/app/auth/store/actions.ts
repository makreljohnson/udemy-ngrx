import {createAction, props} from '@ngrx/store';
import {ActionTypes} from './asctionTypes';
import {RegisterRequestInterface} from '../types/registerRequest.interface';

export const registerAction = createAction(
	ActionTypes.REGISTER,
	props<{ request: RegisterRequestInterface }>()
);
/* request is there to ID that it's a request (http)
* Oleksandr — Instructor
* Hi Seeschon, I'm using props aliases as I want to see when it's an
* input and not a local property. If you want object or array and mutate
* it in child component then it will be also changed in parent.
* This behaviour is difficult to debug. In the case with props I see that
* it's an input and never mutate it (exactly like in Vue and React)
*/
