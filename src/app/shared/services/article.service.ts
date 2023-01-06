import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {ArticleInterface} from '@feed/types/article.interface';
import {GetArticleResponseInterface} from '@shared/types/getArticleResponse.interface';

@Injectable()
export class ArticleService {
	constructor(private http: HttpClient) {
	}

	getArticle(slug: string): Observable<ArticleInterface> {
		const fullURL = `${environment.apiUrl}/articles/${slug}`;
		return this.http.get<GetArticleResponseInterface>(fullURL).pipe(map((response: GetArticleResponseInterface) => {
			return response.article;
		}));
	}
}
