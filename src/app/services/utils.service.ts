import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  private loadedScripts: any = {};

  public async loadScript(src: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.loadedScripts[src]) {
        return resolve(true);
      }
      const script = document.createElement('script');
      script.setAttribute('src', src);
      script.onload = () => resolve(this.loadedScripts[src] = true);
      script.onerror = (error: any) => resolve(false);
      document.body.appendChild(script);
    });
  }
}
