import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { MegaFooterComponent } from '../../components/mega-footer/mega-footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, MegaFooterComponent],
  templateUrl: './main-layout.component.html',
})
export default class MainLayoutComponent {}
