import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppController } from './app.controller';

describe('AppController', () => {
	let app: TestingModule;

	beforeAll(async () => {
		app = await Test.createTestingModule({
			controllers: [AppController],
		}).compile();
	});

	describe('root', () => {
		it('should return 3 elements"', () => {
			const appController = app.get<AppController>(AppController);
			expect(appController.root().length).toBe(3);
		});
	});
});
