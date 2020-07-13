import * as mongoose from 'mongoose';
export const EmployedSchema = new mongoose.Schema({
 name: String,
 rol: String,
 dni: String,
 password: String,
 puesto:String,
 salario:Number,
 horario:String,
 //tareas:any //añadir array de tareas.
 });
