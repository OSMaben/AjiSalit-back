import { BadRequestException, ConflictException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from "mongoose"
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';
import mongoose from 'mongoose';
import { Command, CommandDocument, } from './entities/command.schema';
import { Type } from 'class-transformer';
import {ValidationOrder} from "../services/validationOrder"
import { isInstance } from 'class-validator';

@Injectable()
export class CommandService {
  constructor(
    @InjectModel(Command.name) private commandModel: Model<CommandDocument>,
  ) { }
  async create(createCommandDto: CreateCommandDto, authentificatedId: string) {
    try {
      const existingOrder = await this.commandModel.findOne({qrCode : createCommandDto.qrCode}).exec();
      if(existingOrder){
        throw new ConflictException("هاد الكود مستعمل")
      }
      createCommandDto.companyId = new Types.ObjectId(authentificatedId);
      let newOrder = new this.commandModel(createCommandDto);
      let resultValidation = ValidationOrder(newOrder)
      // console.log("hshshshshshsh status", resultValidation)
      if (resultValidation !== "valide") {
        throw new UnprocessableEntityException(resultValidation);
      }
      let savingOrder = newOrder.save()
      if(!savingOrder){
        return "حاول مرة خرى"
      }
      return newOrder
    } catch (e) {
      if (e instanceof UnprocessableEntityException) {
        throw e;
      }else if (e instanceof ConflictException){
        throw e;
      }
      throw new BadRequestException(e.message)
    }
  }

  async scanedUserId(qrcode: string, userId:string){
    try{
      const updatedCommand = await this.commandModel.findOneAndUpdate({qrCode:qrcode},{clientId:userId},{new: true}).exec();
      if(!updatedCommand)
        throw new NotFoundException(" طلب مكاينش تأكد من رمز مرة أخرى")
      if (updatedCommand.clientId === userId) {
        throw new BadRequestException("عاود حول مسح  Qr مرة خرى");
      }
      return "مبروك تم مسح رمز بنجاح";
    }catch(e){
      // console.log(e)
      if(e instanceof NotFoundException){
        throw new NotFoundException(" طلب مكاينش تأكد من رمز مرة أخرى")
      }
      if(e instanceof BadRequestException){
        throw new BadRequestException("عاود حول مسح  Qr مرة خرى");
      }
      throw new BadRequestException("حاول مرة خرى")
    }

  }

  async findAll(userId :string, role: string) {
    try{
      let query = {}
      if(role == "client"){
        query = {clientId:userId}
      }else if (role == "company"){
        query = {companyId:userId}

      }
      const allOrders = await this.commandModel.find(query)
      if(allOrders.length == 0){
        return "ماكين حتا طلب"
      }
      return allOrders
    }catch(e){
      console.log(e)
      throw new BadRequestException("حاول مرة خرى")
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} command`;
  }

  update(id: number, updateCommandDto: UpdateCommandDto) {
    return `This action updates a #${id} command`;
  }

  remove(id: number) {
    return `This action removes a #${id} command`;
  }
}
