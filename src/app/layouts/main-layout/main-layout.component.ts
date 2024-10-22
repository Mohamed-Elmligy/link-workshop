import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../../components/top-bar/top-bar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './main-layout.component.html',
})
export default class MainLayoutComponent {}
