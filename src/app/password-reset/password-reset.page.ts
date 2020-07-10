import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

  constructor(private authService:AuthService, private router:Router , private alertCtrl:AlertController ) { }

  ngOnInit() {
  }

  async resetPasword(form):Promise<void>{
    this.authService.resetPasword(form.value.email).
    then(
      async ()=>{
        const alert = await this.alertCtrl.create({
          message:'check your email to rest the password',
          buttons:[{text:'ok',role:'cancel',handler:()=>{
            this.router.navigateByUrl('login');
          },},],
        });
         await alert.present();
        
      },
      async error =>{
        const errorAlert = await this.alertCtrl.create({
          message:error.message,
          buttons:[{text:'ok',role:'cancel'}],
        });
         await errorAlert.present();
      }
    );

  }

}
