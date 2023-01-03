import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {PopularTagType} from 'src/app/shared/types/popularTag.type';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {GetPopularTagsResponseInterface} from 'src/app/shared/modules/popular-tags/types/getPopularTagsResponse.interface';

@Injectable({
	providedIn: 'root'
})
export class PopularTagsService {

	constructor(private http: HttpClient) {
	}

	getPopularTags(): Observable<PopularTagType[]> {
		const url = environment.apiUrl + '/tags';
		return this.http.get(url).pipe(
			map((response: GetPopularTagsResponseInterface) => {
				return response.tags;
			})
		);
	}
}
