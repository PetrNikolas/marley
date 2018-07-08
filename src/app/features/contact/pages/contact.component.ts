// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

// ------------------------------------------------------------------------------
// Import custom preload strategy
// ------------------------------------------------------------------------------
import { SelectivePreloadingStrategy } from '../../../preloading-strategy';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss'],
  providers: []
})
export class ContactComponent implements OnInit {
  modules: string[];

  constructor(meta: Meta, title: Title, private preloadStrategy: SelectivePreloadingStrategy) {
    this.modules = preloadStrategy.preloadedModules;

    // Sets the <title></title>
    title.setTitle('Contact');

    // Sets the <meta> tag for the page
    meta.addTags([
      { name: 'author', content: 'Petr Nikolas' },
      { name: 'description', content: 'This is a contact page.' },
    ]);
  }

  ngOnInit() {
  }

}
