// ------------------------------------------------------------------------------
// Import polyfills and other libs
// ------------------------------------------------------------------------------
import "./polyfills.ts";
import "zone.js/dist/long-stack-trace-zone";
import "zone.js/dist/proxy.js";
import "zone.js/dist/sync-test";
import "zone.js/dist/async-test";
import "zone.js/dist/fake-async-test";

// ------------------------------------------------------------------------------
// Import Jest config for Angular
// ------------------------------------------------------------------------------
import "jest-preset-angular";
import "jest-zone-patch";
import "jest-image-snapshot";
import "jest-axe";

// ------------------------------------------------------------------------------
// Common rxjs imports
// ------------------------------------------------------------------------------
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

// ------------------------------------------------------------------------------
// Import global mocks
// Browser mocks globally available for every test
// ------------------------------------------------------------------------------
import "./jest-global-mocks";
