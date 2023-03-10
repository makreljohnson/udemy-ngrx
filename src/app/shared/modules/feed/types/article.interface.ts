import {ProfileInterface} from '@shared/types/profile.Interface';
import {PopularTagType} from '@shared/types/popularTag.type';

export interface ArticleInterface {
	slug: string,
	title: string,
	description: string,
	body: string,
	tagList: PopularTagType[],
	createdAt: string,
	updatedAt: string,
	favorited: boolean,
	favoritesCount: number,
	author: ProfileInterface
}
