import 'web-animations-js/web-animations.min'; /* web animations needed to create animated UI */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
