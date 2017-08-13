// Polyfills
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

// RxJS
import 'rxjs/Rx';

// Server
import * as express from 'express';
import { Request, Response } from 'express';

// Angular libs
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';

// Modules
import { ServerAppModule } from './app/app-server.module';

// Routes
import { ROUTES } from './routes';

// Production mode
enableProdMode();

// New Express app
const app = express();
const port = 8000;
const baseUrl = `http://localhost:${port}`;

// Botstrapping app
app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModule
}));

// Views
app.set('view engine', 'html');
app.set('views', 'src');

// Serve files from dist folder
app.use('/', express.static('dist', {index: false}));

// Routes
ROUTES.forEach((route: string) => {
  app.get(route, (req: Request, res: Response) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('../dist/index', {
      req: req,
      res: res
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
  });
});

// Starting app
app.listen(port, () => {
	console.log(`Listening at ${baseUrl}`);
});
