import { CommandService } from './command.service';
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';
export declare class CommandController {
    private readonly commandService;
    constructor(commandService: CommandService);
    create(createCommandDto: CreateCommandDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCommandDto: UpdateCommandDto): string;
    remove(id: string): string;
}
