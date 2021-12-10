import { Component, OnInit } from '@angular/core';
import { Periodos } from 'src/app/models/periodos.model';
import { PeriodosService } from 'src/app/services/periodo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  periodos: Periodos[] = [];

  constructor(private periodoService: PeriodosService) { }

  ngOnInit(): void {
    this.traerperiodos()
  }

  traerperiodos(){
    this.periodoService.obtenerPeriodos().subscribe((periodos:any) =>{
       console.log(periodos)
       this.periodos = periodos
    })
  }

}
