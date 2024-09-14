import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})

export class RecuperarPasswordPage{
  usuario: string = ''; // Asegúrate de definir la propiedad
  contrasena: string = ''; // Si la necesitas
  contrasena_val:string='';
  mostrarTarjeta: boolean=false;
  constructor(private compartido:SharedService,private router: Router,private alertCtrl:AlertController) { }

  recuperar() {
    if(this.compartido.getUsuario() == this.usuario){
      this.mostrarTarjeta=true;
    } 
  }
  restablecer(){
    if(this.contrasena==this.contrasena_val){
      this.compartido.setVarible(this.contrasena);
      this.confimacionAlert();
      this.inicioSecion();

      this.usuario='';
      this.contrasena= ''; // Si la necesitas
      this.contrasena_val='';
      this.mostrarTarjeta=false;
    }else{
      this.presentAlert();
    }
  }
  inicioSecion(){
    this.router.navigate(['/usuario'])
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      subHeader: 'la Contraseñas No coinciden',
      message: 'Por favor, verifica tu contraseña e intenta de nuevo.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  async confimacionAlert() {
    const alert = await this.alertCtrl.create({
      header: 'AVISO',
      subHeader: 'Se actualizo tu contraseña',
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
