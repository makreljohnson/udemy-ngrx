import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import {FeedStateInterface} from 'src/app/shared/modules/feed/types/feedsState.interface';
import {PopularTagType} from 'src/app/shared/types/popularTag.type';

export interface AppStateInterface {
  auth: AuthStateInterface,
  feed: FeedStateInterface,
  popularTags: PopularTagType[]
}
