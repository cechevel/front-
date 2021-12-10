import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Materia, Usuario } from 'src/app/models/periodos.model';
import { MateriaService } from 'src/app/services/materia.service';
import { PeriodosService } from 'src/app/services/periodo.service';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-crear-periodo',
  templateUrl: './crear-periodo.component.html',
  styleUrls: ['./crear-periodo.component.css']
})
export class CrearPeriodoComponent implements OnInit {

  materias: Materia[] = [];//Todos las materias registradas



  materia!: Materia; //Contiene la información del equipo 


  usuario: Usuario = this.usuarioService.Usuario;// Contiene la información de usuario

  periodoForm!: FormGroup;// Formulario JSON


  constructor(private materiaService: MateriaService,
    private usuarioService: UsuarioService,
    private periodoService: PeriodosService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.periodoForm = this.fb.group({
     /* id:             string;
    numeroPeriodo:  number
    usuario:        Usuario;
    materia:        Materia;
    fecha:          String;
    nota:           number;*/
      usuario: [this.usuario],
      materia: [this.materia],
      fecha: [''],
      goleslocal: [''],
      golesvisitante: [''],
    })
    this.traerMaterias()
  }

  traerMaterias(): void {
    this.materiaService.obtenerMaterias().subscribe((materias: any) => {
      this.materias = materias;
    })
  }

  agregar() {

    this.materias.forEach((element:any) => {
      if(this.periodoForm.controls['materia'].value==element.id){
        this.materia=element
        
        this.periodoForm.controls['materia'].setValue(element)
       
      }

      
      
    });

    console.log(this.periodoForm.value)
     this.periodoService.agregarPeriodo(this.periodoForm.value).subscribe(data=>{
       console.log(data)
     })

  }

}
