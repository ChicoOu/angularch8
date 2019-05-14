import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


function phoneValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^131/)) {
    return { invalidPhonenumber: true };
  }
}
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  myForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  loginFailed: boolean;

  constructor(fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.myForm = fb.group({
      'username': ['aaaaaa', Validators.required],
      'password': ['', Validators.required],
    })

    this.username = this.myForm.controls['username'];
    this.password = this.myForm.controls['password'];
    this.loginFailed = false;
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    if (!this.myForm.valid) {
      alert('表单无效，请检查！');
      return;
    }
    console.log(value);

    // 闭包, var/let
    //var myRouter = this.router;
    this.auth.login(value, function () {
      this.router.navigate(['/home']);
      //myRouter.navigate(['/home']);
    }.bind(this));

    /*this.httpclient.get('http://127.0.0.1:8082/login').subscribe(
      (resp: any) => {
        console.log(resp);
        let u = resp[0];
        let o = value;
        if (u.username == o['username'] && u.password == o['password']) {
          alert('登录成功！');
        }
        else {
          alert('登录失败!');
        }
      }
    );*/

    /*this.httpclient.post('http://127.0.0.1:8082/login', JSON.stringify(value)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
          alert('登录成功！');
        }
        else {
          alert('登录失败');
        }
      }
    );*/
  }
}

