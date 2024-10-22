import { Component, inject, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import * as jsonFile from './banner.json';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  jsonFile: any = jsonFile;
  bannerData: any = this.jsonFile.default.slides;
}
