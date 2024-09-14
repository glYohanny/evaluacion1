import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private animationCtrl: AnimationController) {}

  animationCard(){
    const tarjeta = document.querySelector('.tarjeta-animada');

    if (tarjeta) {
      const animacion = this.animationCtrl.create()
      .addElement(tarjeta)
      .duration(1000)
      .fromTo('transform','translateX(0%)','translateX(100%)') // va a deslisar la targeta oculta para ser visible
      .fromTo('opacity','0','1')
      animacion.play();
    }else{
      console.error("No existe la clase .targeta animada")
    }
  }
}
