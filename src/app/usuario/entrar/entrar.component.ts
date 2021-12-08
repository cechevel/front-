import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {


  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private usuarioService:UsuarioService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
     username: [''],
     password: [''] 
    })
  }
  
  entrar(){

    this.usuarioService.entrar(this.loginForm.value).subscribe((data:any)=>{
      if(data.mensaje=="Accedio correctamente"){
       this.router.navigateByUrl('inicio')
      }else{
        alert(data.mensaje)
      }
    })
  

  }


}
