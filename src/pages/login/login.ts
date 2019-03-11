import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServicesProvider } from '../../providers/api-services/api-services';
import { TabsPage } from '../../pages/tabs/tabs';
import { ToastController } from 'ionic-angular';
import { RegisterPage} from '../../pages/register/register';
import { ForgotPasswordPage} from '../../pages/forgot-password/forgot-password';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiCtrl:ApiServicesProvider,private toastCtrl: ToastController) {
  }
  private username: string;
  private password: string;
  private error: string;
  // setting register page into aa variable
  registerPage = RegisterPage;
  forgotpasswordpage = ForgotPasswordPage;
  signIn() {
    let toasterMessage; 
    if(this.username == "" || this.password == ""){
      let toast = this.toastCtrl.create({
        message: "please fill the form",
        duration: 3000
      });
      toast.present();
    }
    this.username = "ranjan.g@pacewisdom.com";
    this.password = "qqww";
    
    this.apiCtrl.listAddressApi_post(this.username,this.password).subscribe(data=>{
      if(data['status']=='success'){
        console.log('success');
        this.navCtrl.push(TabsPage);
      }
      toasterMessage = data['message'];
    },err=>{
      toasterMessage = err['message'];
    })
  }

  loadSignUp(){

    this.navCtrl.push(TabsPage);
  }

  forgotPassword() {

    this.apiCtrl.listAddressApi_post('ranjan.g@pacewisdom.com','123456').subscribe(data=>{
      
      if(data['status']=='success'){
        console.log('success');
        this.navCtrl.push(TabsPage);
      }
    },err=>{
      console.log();
    })
  }

  signUp() {
    this.apiCtrl.listAddressApi_post('ranjan.g@pacewisdom.com','123456').subscribe(data=>{
      
      if(data['status']=='success'){
        console.log('success');
        this.navCtrl.push(TabsPage);
      }
    },err=>{
      console.log();
    })
  }

}
