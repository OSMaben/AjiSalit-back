import { Model } from "mongoose";
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';
import mongoose from 'mongoose';
import { Command, CommandDocument } from './entities/command.schema';
export declare class CommandService {
    private commandModel;
    constructor(commandModel: Model<CommandDocument>);
    create(createCommandDto: CreateCommandDto, authentificatedId: string): Promise<"حاول مرة خرى" | (mongoose.Document<unknown, {}, CommandDocument> & Command & mongoose.Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })>;
    scanedUserId(qrcode: string, userId: string): Promise<string>;
    findAll(userId: string, role: string): Promise<"ماكين حتا طلب" | (mongoose.Document<unknown, {}, CommandDocument> & Command & mongoose.Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: number): string;
    update(id: number, updateCommandDto: UpdateCommandDto): string;
    remove(id: number): string;
}
