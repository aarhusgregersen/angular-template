import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  @Input() error?: string | null;
  @Output() submitEM = new EventEmitter();
  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {}

  public submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
}
