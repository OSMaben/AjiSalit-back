import { CommandService } from './command.service';
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';
export declare class CommandController {
    private readonly commandService;
    constructor(commandService: CommandService);
    create(createCommandDto: CreateCommandDto, req: any): Promise<"حاول مرة خرى" | (import("mongoose").Document<unknown, {}, import("./entities/command.schema").CommandDocument> & import("./entities/command.schema").Command & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })>;
    scanedUserId(qrcode: string, req: any): Promise<string>;
    findAll(req: any): Promise<"ماكين حتا طلب" | (import("mongoose").Document<unknown, {}, import("./entities/command.schema").CommandDocument> & import("./entities/command.schema").Command & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): string;
    update(id: string, updateCommandDto: UpdateCommandDto): string;
    remove(id: string): string;
}
