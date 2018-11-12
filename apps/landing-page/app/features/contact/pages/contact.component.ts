// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

// ------------------------------------------------------------------------------
// Import custom preload strategy
// ------------------------------------------------------------------------------
import { SelectivePreloadingStrategy } from '../../../preloading-strategy';

export interface Person {
	id: number;
	name: string;
	nickname: string;
	big_image: string;
	small_image: string;
	description: string;
}

@Component({
	selector: 'app-contact',
	templateUrl: 'contact.component.html',
	styleUrls: ['contact.component.scss'],
	providers: [],
})
export class ContactComponent implements OnInit {
	modules: string[];

	persons: Array<Person> = [
		{
			id: 1,
			name: 'John Smith',
			nickname: '@johnsmith',
			big_image: 'https://bulma.io/images/placeholders/1280x960.png',
			small_image: 'https://bulma.io/images/placeholders/96x96.png',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
		},
		{
			id: 2,
			name: 'John Smith',
			nickname: '@johnsmith',
			big_image: 'https://bulma.io/images/placeholders/1280x960.png',
			small_image: 'https://bulma.io/images/placeholders/96x96.png',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
		},
	];

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

	ngOnInit() {}
}
