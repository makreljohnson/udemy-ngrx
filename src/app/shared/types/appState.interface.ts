import {AuthStateInterface} from '@auth/types/authState.interface';
import {FeedStateInterface} from '@feed/types/feedsState.interface';
import {PopularTagType} from '@shared/types/popularTag.type';
import {ArticleStateInterface} from '@article/types/articleState.interface';
import {CreateArticleStateInterface} from '@createArticle/types/create-article-state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface,
  feed: FeedStateInterface,
  popularTags: PopularTagType[],
  article: ArticleStateInterface,
  createArticle: CreateArticleStateInterface
}
