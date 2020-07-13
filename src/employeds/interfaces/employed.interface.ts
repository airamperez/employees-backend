import { Document } from 'mongoose';
export interface Employed extends Document {
 readonly name: string;
 readonly rol: string;
 readonly dni: string;
 readonly password: string;
 readonly puesto: string;
 readonly salario: number;
 readonly horario: string;
 //readonly tareas:any //Añadir tareas para empleados en forma de array de objetos.
}
