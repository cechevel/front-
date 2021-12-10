import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriaService } from 'src/app/services/materia.service';
@Component({
  selector: 'app-crear-materia',
  templateUrl: './crear-materia.component.html',
  styleUrls: ['./crear-materia.component.css']
})
export class CrearMateriaComponent implements OnInit {

  materiaForm!: FormGroup;
  constructor(private materiaService: MateriaService, 
    private fb: FormBuilder, 
    private router: Router) { }

  ngOnInit(): void {
    this.materiaForm= this.fb.group({
      id: [''],
      nombre: [''],
      isActive:['']
    })
  }


  agregar(){
    this.materiaService.añadirMateria(this.materiaForm.value).subscribe((data:any)=>{
      console.log(data)
      if(data.estado=="true"){
   this.router.navigateByUrl("inicio")
      }else{
        alert("Ha ocurrido un error")
      }
    })
  }


}
