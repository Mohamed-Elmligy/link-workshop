import { Component, inject, OnInit, signal } from '@angular/core';
import { HomeService } from '../../modules/main/home/home.service';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-news-category',
  standalone: true,
  imports: [MatIcon, MatIconButton],
  templateUrl: './news-category.component.html',
})
export class NewsCategoryComponent implements OnInit {
  newsCategory = signal<newsCategory[]>([]);
  newsData = signal<newsData[]>([]);
  showAll = signal<boolean>(false);

  homeService = inject(HomeService);

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

  handleNumberOfNews(): newsData[] {
    if (this.showAll()) {
      console.log(this.newsData());

      return this.newsData();
    } else {
      let initialNews = this.getElements(this.newsData());
      return initialNews;
    }
  }

  getElements(array: newsData[]) {
    return array.slice(0, 10);
  }

  returnCategory(id: string) {
    return (
      (id == '1' && 'Technology') ||
      (id == '2' && 'Sports') ||
      (id == '3' && 'Health') ||
      (id == '4' && 'Economics') ||
      (id == '5' && 'Art')
    );
  }

  // api not accept dynamic types it's return just one type with name and id and that not necessary
  selectedCategory(categoryName: string, categoryId: string) {
    this.homeService
      .getSelectedCategory(categoryName, categoryId)
      .subscribe((res) => {
        console.log(res);
      });
  }

  handleMyFav(newId: string) {
    let findMyFav = this.homeService.customerFav.find((el) => el == newId);
    if (findMyFav) {
      let myFavIndex = this.homeService.customerFav.indexOf(findMyFav);
      this.homeService.customerFav.splice(myFavIndex, 1);
    } else {
      this.homeService.customerFav.push(newId);
    }
  }

  changeIcon(newId: string): string {
    return this.homeService.customerFav.includes(newId)
      ? 'favorite'
      : 'favorite_border';
  }

  showAllNews() {
    this.showAll.set(true);
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
