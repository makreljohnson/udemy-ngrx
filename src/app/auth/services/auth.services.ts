import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';
import {RegisterRequestInterface} from '@auth/types/registerRequest.interface';
import {environment} from 'src/environments/environment';
import {AuthResponseInterface} from '@auth/types/authResponseInterface';
import {LoginRequestInterface} from '@auth/types/loginRequest.interface';


@Injectable()
export class AuthService {

	constructor(private http: HttpClient) {

	}

	/**
	 * @param {Object} response
	 * @returns {CurrentUserInterface}
	 */
	getUserFromResponse(response: AuthResponseInterface): CurrentUserInterface {
		return response.user;
	}

	register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
		const url = environment.apiUrl + '/users';
		/* post is a type AuthResponseInterface to restrict to known properties
		pipe to return a distilled observable of a CurrentUserInterface */
		return this.http.post<AuthResponseInterface>(url, data).pipe(
			map(this.getUserFromResponse)
		);
	}

	login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
		const url = environment.apiUrl + '/users/login';
		return this.http.post<AuthResponseInterface>(url, data).pipe(
			map(this.getUserFromResponse)
		);
	}

	getCurrentUser(): Observable<CurrentUserInterface> {
		const url = environment.apiUrl + '/user';
		return this.http.get<AuthResponseInterface>(url).pipe(
			map(this.getUserFromResponse)
		);
	}

}
