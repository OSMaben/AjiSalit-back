import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from "mongoose"
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';
import mongoose from 'mongoose';
import { Command, CommandDocument, } from './entities/command.schema';
import { Type } from 'class-transformer';
import {ValidationOrder} from "../services/validationOrder"

@Injectable()
export class CommandService {
  constructor(
    @InjectModel(Command.name) private commandModel: Model<CommandDocument>,
  ) { }
  create(createCommandDto: CreateCommandDto, authentificatedId: string) {
    try {
      createCommandDto.companyId = new Types.ObjectId(authentificatedId);
      let newOrder = new this.commandModel(createCommandDto);
      if(ValidationOrder(newOrder) !== "valide"){
        return ValidationOrder(newOrder)
      }
      let savingOrder = newOrder.save()
      if(!savingOrder){
        return "حاول مرة خرى"
      }
      return newOrder
    } catch (e) {
      console.log("ops an error",e)
      throw new BadRequestException("Ops smth went wrong")
    }
  }

  findAll() {
    return `This action returns all command`;
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
