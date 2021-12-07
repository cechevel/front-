import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  baseURL= environment.baseURL;
    constructor(private http:HttpClient) { }

    getToken(){
      return localStorage.getItem("token") || '';
    }

    get headers(){
      return {headers: {"Authorization": this.getToken() } }
    }

    obtenerMaterias(){
      return this.http.get(`${this.baseURL}/api/materias`, this.headers)
    }
}
