import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})
export class SingUpPage implements OnInit {

  constructor(private authService:AuthService, private router:Router , private alertCtrl:AlertController ) { }

  ngOnInit() {
  }

  async singUpUser(form):Promise<void>{
    this.authService.singUpUser(form.value.email , form.value.password).
    then(
      ()=>{
        this.router.navigateByUrl('login');
      },
      async error =>{
        const alert = await this.alertCtrl.create({
          message:error.message,
          buttons:[{text:'ok',role:'cancel'}],
        });
         await alert.present();
      }
    );

  }
  goToLogin(){
    this.router.navigateByUrl('login');
  }

}
