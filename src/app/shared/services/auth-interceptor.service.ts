import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {PersistenceService} from '@shared/services/persistence.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

	constructor(private percySvc: PersistenceService) {
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = this.percySvc.get('accessToken');

		/* NOTE: clone the request and add headers to it */
		request = request.clone({
			setHeaders: {
				authorization: token ? `Token ${token}` : ''
			}
		});
		/* return the next step of the request */
		return next.handle(request);
	}
}
