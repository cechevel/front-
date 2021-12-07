import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  baseURL= environment.baseURL;
  constructor(private http:HttpClient) { }

  get headers(){
    return {headers: {"Content-Type": "application/json"} }
  }

  entrar(dato: any){
    return this.http.post(`${this.baseURL}/api/usuarios/login`,dato,this.headers)
    .pipe(
      tap((data: any) =>{
        if(data.mensaje=="Accedió correctamente"){
          localStorage.setItem("token",data.token)
        }
      }),
      map(res=>res)
    )
  }
}