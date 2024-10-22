import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-mega-footer',
  standalone: true,
  imports: [MatButtonModule, MatIcon],
  templateUrl: './mega-footer.component.html',
  styles: ``,
})
export class MegaFooterComponent {}
