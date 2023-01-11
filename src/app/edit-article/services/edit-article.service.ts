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
export class EditArticleService {

	constructor(private http: HttpClient) {
	}

	updateArticle(
		slug:string,
		articleInput: ArticleInputInterface
	): Observable<ArticleInterface> {
		const fullUrl = `${environment.apiUrl}/articles/${slug}`;
		return this.http
			/* this was wrong using just articleInput as the param */
			.put<SaveArticleResponseInterface>(fullUrl, {article: articleInput})
			.pipe(
				map((response: SaveArticleResponseInterface) => {
						return response.article;
					}
				)
			);
	}
}
