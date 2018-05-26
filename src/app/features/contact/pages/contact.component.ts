// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss'],
  providers: []
})
export class ContactComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
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
