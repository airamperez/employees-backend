import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Employed } from '../../interfaces/employed.interface';
import { CreateEmployedDto } from '../../interfaces/create-employed-dto';
import { async } from 'rxjs/internal/scheduler/async';
const password = require('password-hash-and-salt');
const util = require('util');
const fs = require('fs');


@Injectable()
export class EmployedsService {
   constructor(
      @Inject('EMPLOYED_MODEL')
      private readonly EmployedModel: Model<Employed>,
   ) { }
   async create(createEmployedDto: CreateEmployedDto): Promise<Employed> {
      const createdEmployed = new this.EmployedModel(createEmployedDto);
      return createdEmployed.save();
   }
   async findAll(): Promise<Employed[]> {
      return this.EmployedModel.find().exec();
   }
   async findOne(_id: string): Promise<Employed> {
      return this.EmployedModel.findOne({ _id }).exec();
   }
   async findName(name: string): Promise<Employed> {
      return this.EmployedModel.findOne({ name }).exec();
   }
   async findUser(dni: string): Promise<Employed> {
      return this.EmployedModel.findOne({ dni }).exec();
   }
   async delete(id: string) {
      return this.EmployedModel.deleteOne({ _id: id })
   }
   async deleteWDni(dni: string) {
      return this.EmployedModel.deleteOne({ dni: dni })
   }

   async update(dni: string, createEmployedDto: CreateEmployedDto): Promise<Employed> {
      const createdEmployed = new this.EmployedModel(createEmployedDto);
      return this.EmployedModel.update({ "dni": dni }, createdEmployed);
   }

   async verifyUser(user): Promise<any> {
      return this.findUser(user.dni)
         .then(DbUser => {
            let passwd = password(user.password)
            return util.promisify(passwd.verifyAgainst).bind(passwd)(DbUser.password)
               .then(verified => {
                  if (verified) {
                     return true;
                  }
                  else {
                     return false;
                  }
               })
               .catch(error => console.log(error));
         })
   }
}