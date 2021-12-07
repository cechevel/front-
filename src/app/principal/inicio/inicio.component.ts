import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private materiaService: MateriaService) { }

  ngOnInit(): void {
    this.traerMaterias()
  }

  traerMaterias(){
    this.materiaService.obtenerMaterias().subscribe(materias =>{
       console.log(materias)
    })
  }

}
