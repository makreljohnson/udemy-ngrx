import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {GetFeedResponseInterface} from '@shared/modules/feed/types/getFeedResponse.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable()
export class FeedService {
	constructor(private http: HttpClient) {
	}

	getFeed(url: string): Observable<GetFeedResponseInterface> {
		const fullURL = environment.apiUrl + url;
		return this.http.get<GetFeedResponseInterface>(fullURL);
	}
}
