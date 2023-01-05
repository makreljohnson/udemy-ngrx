import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import {FeedStateInterface} from '@shared/modules/feed/types/feedsState.interface';
import {PopularTagType} from '@shared/types/popularTag.type';

export interface AppStateInterface {
  auth: AuthStateInterface,
  feed: FeedStateInterface,
  popularTags: PopularTagType[]
}
