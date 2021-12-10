export interface Periodos {
    id:             string;
    numeroPeriodo:  number
    usuario:        Usuario;
    materia:        Materia;
    nota:           number;
   
}





export interface Materia {
    id:     string;
    nombre: string;
    isActive?:boolean
}

export interface Usuario {
    id:       string;
    nombre:   string;
    correo:   string;
    username: string;
    password?: string;
    hash?:     string;
}