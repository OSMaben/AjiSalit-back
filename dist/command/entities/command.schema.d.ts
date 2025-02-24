import { HydratedDocument, Types } from 'mongoose';
export type CommandDocument = HydratedDocument<Command>;
export declare class Command {
    companyId: string;
    clientId: string;
    answers: Record<string, any>;
    qrCodeUrl: string;
    status: string;
    amount: number;
    StartDate: Date;
    endDate: Date;
}
export declare const CommandSchema: import("mongoose").Schema<Command, import("mongoose").Model<Command, any, any, any, import("mongoose").Document<unknown, any, Command> & Command & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Command, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Command>> & import("mongoose").FlatRecord<Command> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
