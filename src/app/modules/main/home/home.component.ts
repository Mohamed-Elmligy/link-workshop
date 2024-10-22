import { Component } from '@angular/core';
import { NewsCategoryComponent } from '../../../components/news-category/news-category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewsCategoryComponent],
  templateUrl: './home.component.html',
})
export default class HomeComponent {}
