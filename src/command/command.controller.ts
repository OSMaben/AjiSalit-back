import { Controller, Get, Post, Body, Patch, Param, Delete, Req, BadRequestException, NotFoundException } from '@nestjs/common';
import { CommandService } from './command.service';
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';
import {validateJwt} from "../services/verifyJwt"

@Controller('command')
export class CommandController {
  constructor(private readonly commandService: CommandService) {}

  @Post()
  create(@Body() createCommandDto: CreateCommandDto, @Req() req) {
    try{
      let token = req.headers['authorization'];
      let infoUser = validateJwt(token);
      if(!infoUser){
        throw new NotFoundException("حاول تسجل مرة أخرى")
      }
      //guard to add later, those who has company role are the one who can create the offer 
      const authentificatedId = infoUser.id;
      // console.log(infoUser);
      return this.commandService.create(createCommandDto, authentificatedId);
    }catch(e){
      console.log(e)
      throw new BadRequestException('Try to login again')
    }

  }

  @Get()
  findAll() {
    return this.commandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commandService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommandDto: UpdateCommandDto) {
    return this.commandService.update(+id, updateCommandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commandService.remove(+id);
  }
}
