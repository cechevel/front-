import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  usuarioForm!: FormGroup;
  constructor(private usuarioService: UsuarioService, 
    private fb: FormBuilder, 
    private router: Router) { }


  ngOnInit(): void {
    this.usuarioForm= this.fb.group({
      nombre: [''],
      correo: [''],
      username: [''],
      password: [''],
      hash:['']
      
    })
  }
  agregar(){
    this.usuarioService.añadirUsuario(this.usuarioForm.value).subscribe((data:any)=>{
      console.log(data)
      
    })
  }

}
