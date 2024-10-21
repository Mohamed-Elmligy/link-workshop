import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import API from "../../../core/utils/API's";
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  apiService = inject(ApiService);
  getNewsCategory = this.apiService
    .getData(API.news_Category)
    .pipe(map((response: any) => response.newsCategory));

  getAllNews = this.apiService
    .getData(API.news_listing)
    .pipe(map((res: any) => res.News));
}
