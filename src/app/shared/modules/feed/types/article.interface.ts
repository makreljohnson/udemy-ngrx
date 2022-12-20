import {AuthorInterface} from 'src/app/shared/types/author.interface';

export interface ArticleInterface {

	slug: string,
	title: string,
	description: string,
	body: string,
	tagList: string[],
	createdAt: string,
	updatedAt: string,
	favorited: boolean,
	favoritesCount: number,
	author: AuthorInterface
}
