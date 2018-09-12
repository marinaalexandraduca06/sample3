import { Component, ViewChild, OnInit } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';

import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'app/services';

@Component ({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})
export class SuggestComponent implements OnInit {
  @ViewChild('editorInst') public editorInst: CKEditorComponent;
  public editorConfig: any = {
    fontSize_sizes: '6/6px;8/8px;10/10px;12/12px;14/14px;16/16px;18/18px;',
    removePlugins: 'elementspath',
    resize_enabled: false,
    toolbar: [
      [
        'Bold',
        'Italic',
        'Underline',
        'Strike',
        'FontSize',
        'Font',
        'TextColor',
        'BGColor',
        'JustifyLeft',
        'JustifyCenter',
        'JustifyRight',
        'NumberedList',
        'BulletedList',
        'Outdent',
        'Indent',
        'Link',
        'Unlink',
        'Table'
      ]
    ],
    uiColor: '#F9FAFC',
    height: '400px',
    width: '700px'
  };
  public ckeditorContent: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public utils: UtilsService
  ) {}

  public async ngOnInit(): Promise<void> {
    if (!(window as any).CKEDITOR) {
      (window as any).CKEDITOR_BASEPATH = undefined;
      await this.utils.loadScript('https://cdn.ckeditor.com/4.7.3/full/ckeditor.js');
    }
    try {
      this.editorInst.ckeditorInit(this.editorConfig);
    } catch (e) {
      console.log(e);
    }
  }

  public send(): void {
    this.router.navigate(['']);
  }
}
