import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-login-page-template',
  templateUrl: './login-page-template.component.html',
  styleUrls: ['./login-page-template.component.scss'],
})
export class LoginPageTemplateComponent {
  @ContentChild('title') title?: TemplateRef<string>;
  @ContentChild('body') body?: TemplateRef<any>;
  @ContentChild('footer') footer?: TemplateRef<any>;

  constructor() {}
}
