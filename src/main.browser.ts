import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModuleRef } from '@angular/core';

import { environment } from 'environments/environment';
import { AppModule } from './app/app.module';

export function main(): Promise<any> {
  let modulePromise: Promise<NgModuleRef<AppModule>> = null;

  if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => {
      const oldRootElem = document.querySelector('app');
      const newRootElem = document.createElement('app');
      oldRootElem!.parentNode!.insertBefore(newRootElem, oldRootElem);
      if (modulePromise) {
        modulePromise.then((appModule) => {
          appModule.destroy();
          if (oldRootElem !== null) {
            oldRootElem!.parentNode!.removeChild(oldRootElem);
          }
          return appModule;
        });
      }
    });
  }

  modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);

  return modulePromise.then(environment.decorateModuleRef).catch((err) => console.error(err));
}

switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
    break;
  case 'interactive':
  case 'complete':
  default:
    main();
}

function _domReadyHandler() {
 document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
 main();
}
