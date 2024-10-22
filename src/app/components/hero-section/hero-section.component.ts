import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterModule, MatIcon, CommonModule, MatButtonModule],
  templateUrl: './hero-section.component.html',
  styles: ``,
})
export class HeroSectionComponent {
  heroData = input<heroData>(new heroData());
}

class heroData {
  id!: number;
  category!: string;
  title!: string;
  brief!: string;
  colorCode!: string;
  imgUrl!: string;
  itemUrl!: string;
  videoUrl!: string;
  lineImgUrl!: string;
  rotatedImgUrl!: string;
}
