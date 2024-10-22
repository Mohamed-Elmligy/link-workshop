import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import API from "../../../core/utils/API's";
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  apiService = inject(ApiService);

  customerFav: string[] = [];

  getNewsCategory = this.apiService
    .getData(API.news_Category)
    .pipe(map((response: any) => response.newsCategory));

  getSelectedCategory(name: string, id: string): Observable<any> {
    return this.apiService
      .getDataById(API.news_item, name, id)
      .pipe(map((response: any) => response.newsCategory));
  }

  getAllNews = this.apiService
    .getData(API.news_listing)
    .pipe(map((res: any) => res.News));
}
