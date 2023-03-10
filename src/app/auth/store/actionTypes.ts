/* NOTE: using enum vs const gets you a unique key-check in case your enum is large */

export enum ActionTypes {
	REGISTER = '[Auth] Register',
	REGISTER_SUCCESS = '[Auth] Register success',
	REGISTER_FAILURE = '[Auth] Register failure',

	LOGIN = '[Auth] Login',
	LOGIN_SUCCESS = '[Auth] Login success',
	LOGIN_FAILURE = '[Auth] Login failure',
	LOGOUT = '[Auth] Logout success',

	GET_CURRENT_USER = '[Auth] Get current user',
	GET_CURRENT_USER_SUCCESS = '[Auth] Get current user success',
	GET_CURRENT_USER_FAILURE = '[Auth] Get current user failure',
}
