import {ArticleInterface} from '@article/types/article.interface';

export interface ArticleStateInterface {
	isLoading: boolean,
	error: string | null,
	data: ArticleInterface | null
}
