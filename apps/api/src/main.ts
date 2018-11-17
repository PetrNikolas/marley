// ------------------------------------------------------------------------------
// Import Nest libs
// ------------------------------------------------------------------------------
import { NestFactory } from '@nestjs/core';

// ------------------------------------------------------------------------------
// Import app module
// ------------------------------------------------------------------------------
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	await app.listen(process.env.PORT || 3000);
}
bootstrap();
