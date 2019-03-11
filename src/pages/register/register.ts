import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage} from '../../pages/login/login';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  signupform: FormGroup;
  loginPage = LoginPage;
  submitAttempt: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {
    this.signupform = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      userEmail:  ['', Validators.required],
      userMobile: ['', Validators.required],
      password: ['', Validators.required],
      cnfPassword: ['', Validators.required],
  });
  }

  ionViewDidLoad() {  
    console.log('ionViewDidLoad RegisterPage');
   
  }
  // loading login page
  loadloginPage(){
    this.navCtrl.setRoot(LoginPage);
  }

  // register the user on click of signup button
  doRegister(){

    //code goes here ....
  }
  

}
