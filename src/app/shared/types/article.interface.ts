import {ProfileInterface} from '@shared/types/profile.Interface';

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
	author: ProfileInterface
}
