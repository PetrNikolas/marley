// ------------------------------------------------------------------------------
// Import Nest libs
// ------------------------------------------------------------------------------
import { Controller, Get } from '@nestjs/common';

import { Ticket } from '@data';

const tickets: Ticket[] = [
	{
		id: 1,
		title: 'Login page is broken',
	},
	{
		id: 2,
		title: 'Everything is broken!!!',
	},
];

@Controller()
export class AppController {
	@Get('/')
	root(): Ticket[] {
		return tickets;
	}
}
