import { Prop, Schema, SchemaFactory,} from '@nestjs/mongoose';
import * as  mongoose from 'mongoose';

export type UserDocument = Command & Document;
@Schema()
export class Command {
  @Prop({type: [{type : mongoose.Schema.Types.ObjectId, ref:'User'}] })
  companyId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId,ref: 'User', required: true }) 
  clientId: string;
  
  @Prop({required: true, default: "غير خالص", enum: ["خالص", "غير خالص","تسبيق"]})
  situation:string;

  @Prop({ required: true, default:"قيد الانتظار", enum: ["في طور الانجاز","قيد الانتظار", "جاهزة للتسليم", "تم تسليم"] })
  status: string;
  
  @Prop({ required: false})
  advancedAmount:number;

  @Prop({reauired: true})
  city:string;

  @Prop({ required: true })
  price: number; 

  @Prop({ required: true })
  StartDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop()
  qrCodeUrl: string;

}

export const CommandSchema = SchemaFactory.createForClass(Command);
