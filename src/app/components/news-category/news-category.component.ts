import { Component, inject, OnInit, signal } from '@angular/core';
import { HomeService } from '../../modules/main/home/home.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-news-category',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './news-category.component.html',
})
export class NewsCategoryComponent implements OnInit {
  homeService = inject(HomeService);
  newsCategory = signal<newsCategory[]>([]);
  newsData = signal<newsData[]>([]);

  getAllNewsCategory = this.homeService.getNewsCategory.subscribe((res) =>
    this.newsCategory.set(res)
  );

  getAllNewsData = this.homeService.getAllNews.subscribe((res) =>
    this.newsData.set(res)
  );

  ngOnInit(): void {
    this.getAllNewsCategory;
    this.getAllNewsData;
  }
}

interface newsCategory {
  id: string;
  name: string;
}

interface newsData {
  id: string;
  title: string;
  content: string;
  categoryID: string;
  urlToImage: string;
  description: string;
  publishedDate: string;
  showOnHomepage: string;
}
