import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticleInputInterface} from '@shared/types/article-input';
import {map, Observable} from 'rxjs';
import {ArticleInterface} from '@feed/types/article.interface';
import {environment} from '@environments/environment';
import {SaveArticleResponseInterface} from '@shared/types/save-article-response-interface';

@Injectable({
	providedIn: 'root'
})
export class CreateArticleService {

	constructor(private http: HttpClient) {
	}

	createArticle(
		articleInput: ArticleInputInterface
	): Observable<ArticleInterface> {
		const fullUrl = environment.apiUrl + '/articles';
		return this.http
			.post<SaveArticleResponseInterface>(fullUrl, {article: articleInput})/* this was wrong using just articleInput*/
			.pipe(
				map((response: SaveArticleResponseInterface) => {
						return response.article;
					}
				)
			);
	}
}
