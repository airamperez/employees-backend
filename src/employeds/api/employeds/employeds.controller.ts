import { Controller, Get, Body, Post, Delete, Param, Put } from '@nestjs/common';
import { EmployedsService } from '../../services/employeds/employeds.service';
import { strict } from 'assert';
@Controller('employed')
export class EmployedsController {
 constructor( private employedService: EmployedsService ) {}
 @Post('create')
 Create(@Body() employedDetails){
 this.employedService.create(employedDetails);
 return { msg: 'hello' }
 }
 @Get('readAll')
 ReadAll(){
 return this.employedService.findAll();
 }
 @Get('find/:id')
 Find(@Param('id') id: string){
 return this.employedService.findOne(id);
 }
 @Get('findName/:name')
 FindName(@Param('name') name: string){
 return this.employedService.findName(name);
 }
 @Get('findUser/:dni')
 FindUser(@Param('dni') dni: string){
 return this.employedService.findUser(dni);
 }
 @Post('verify')
 Verifi(@Body() employe){
    return this.employedService.verifyUser(employe).then(value=>{
       return value;
    })
 }

 @Delete('delete/:id')
 DeleteEmployed(@Param('id') id: string){
 return this.employedService.delete(id);
 }

 @Delete('deleteDNI/:dni')
 DeleteWDni(@Param('dni') dni: string){
    return this.employedService.deleteWDni(dni);
 }
 
 @Put('update/:dni')
 updateEmployed(@Param('dni') dni:string,  @Body() employedDetails){
    let a = this.employedService.update(dni, employedDetails);
    console.log(a);
 }
}
