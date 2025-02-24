import * as mongoose from 'mongoose';
export type UserDocument = Command & Document;
export declare class Command {
    companyId: string;
    clientId: string;
    situation: string;
    status: string;
    advancedAmount: number;
    city: string;
    price: number;
    StartDate: Date;
    endDate: Date;
    qrCodeUrl: string;
}
export declare const CommandSchema: mongoose.Schema<Command, mongoose.Model<Command, any, any, any, mongoose.Document<unknown, any, Command> & Command & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Command, mongoose.Document<unknown, {}, mongoose.FlatRecord<Command>> & mongoose.FlatRecord<Command> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
