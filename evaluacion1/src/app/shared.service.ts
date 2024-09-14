import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  usuario_reg:string='hola';
  private _contrasena_reg= new BehaviorSubject<string>('1234')
  public contrasena_reg=this._contrasena_reg.asObservable();
  constructor() { }
  setVarible(nuevo:string){
    this._contrasena_reg.next(nuevo)
  }
  getUsuario(){
    return this.usuario_reg
  }
  getContrasena(){
    return this._contrasena_reg
  }
}
