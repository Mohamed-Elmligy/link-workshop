import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule],
  templateUrl: './not-found.component.html',
})
export default class NotFoundComponent {}
