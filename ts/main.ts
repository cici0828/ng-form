//不显示引入，你会得到"Uncaught reflect-metadata shim is required when using class decorators"的错误
import 'reflect-metadata';

import 'zone.js/dist/zone';

import { AppModule } from './app.module';

//引入启动器
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

//启动应用
platformBrowserDynamic().bootstrapModule(AppModule);