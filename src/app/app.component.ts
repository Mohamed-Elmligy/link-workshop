import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LANG, TranslationService } from './core/services/translation.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'linkDevWorkshop';
  private translation = inject(TranslateService);
  private language = inject(TranslationService);

  ngOnInit(): void {
    initFlowbite();
    this.language.setLanguage(LANG.EN);
    this.translation.onLangChange.subscribe((event: LangChangeEvent) => {
      // we can change layout depended on language
    });
  }
}
