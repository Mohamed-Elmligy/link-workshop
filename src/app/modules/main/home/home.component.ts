import { Component } from '@angular/core';
import { NewsCategoryComponent } from '../../../components/news-category/news-category.component';
import { BannerComponent } from '../../../components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, NewsCategoryComponent],
  templateUrl: './home.component.html',
})
export default class HomeComponent {}
