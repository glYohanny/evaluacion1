import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,private compartido:SharedService) { }
  usuario =this.compartido.getUsuario();
  irALogin(){
    this.router.navigate(['/usuario'])
  }

}
