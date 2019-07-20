import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtmlPipe'
})
export class SafeHtmlPipe implements PipeTransform {

  transform(content: string) {
    return this._satinized.bypassSecurityTrustHtml(content);
  }

  constructor(private _satinized: DomSanitizer) { }
}
