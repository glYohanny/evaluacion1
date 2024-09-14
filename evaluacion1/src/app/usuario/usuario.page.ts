import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController,AlertController } from '@ionic/angular';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage {
  usuario: string ='';
  contrasena: string ='';
  

  constructor(private router: Router, private animationCtrl: AnimationController,private alertCtrl:AlertController,private compartido:SharedService) { }
  usuario_reg:string= this.compartido.getUsuario();
  //funcion que alerta de error de contraceña
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      subHeader: 'Contraseña incorrecta',
      message: 'Por favor, verifica tu contraseña e intenta de nuevo.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  // funciones para los botones
  ingresar() {

    if (this.usuario == this.usuario_reg && this.contrasena == this.compartido.getContrasena().getValue()){
        
      const tarjeta = document.querySelector('.form-wrapper');

      if (tarjeta) {
        const animacion = this.animationCtrl.create()
        .addElement(tarjeta)
        .duration(2000)
        .fromTo('transform','translateY(-60%)','translateY(0%)') // va a deslisar la targeta oculta para ser visible
        .fromTo('opacity','0','1')
        animacion.play();
      }else{
        console.error("No existe la clase .targeta animada")
      }
      this.home_hack();
      this.contrasena='';
      this.usuario='';
      
    }else{
      this.presentAlert();
      this.contrasena='';
    }
  }
  
  recuperar (){
    
    const tarjeta = document.querySelector('.form-wrapper');
    if (tarjeta) {
      const animacion = this.animationCtrl.create()
      .addElement(tarjeta)
      .duration(2000)
      .fromTo('transform','translateX(80%)','translateY(0%)') // va a deslisar la targeta oculta para ser visible
      .fromTo('opacity','0','1')
      animacion.play();

      this.router.navigate(['/recuperar-password'])
      this.contrasena='';
    }else{
      console.error("No existe la clase .targeta animada")
    }
  }
  //boton de prueba eliminalo si lo vez
  home_hack(){
    this.router.navigate(['/home'], { queryParams: { usuario: this.usuario } });
  }
}



