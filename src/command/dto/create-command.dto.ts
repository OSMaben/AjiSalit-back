import { IsNotEmpty, IsString, IsOptional, IsNumber, IsEnum, IsArray, IsAlphanumeric, IsMongoId, IsInt, IsDateString  } from "class-validator";
import { Types } from "mongoose";

export class CreateCommandDto {
    @IsOptional()
    @IsMongoId()
    companyId?:Types.ObjectId

    @IsOptional()
    @IsMongoId()
    userId?:Types.ObjectId

    @IsNotEmpty({message:"دخل تمن ديال هاد الخدمة"})
    price:number

    @IsNotEmpty({message:"لازم دخل الحالة "})
    @IsEnum(["خالص", "غير خالص","تسبيق" ])
    situation:string

    @IsOptional()
    @IsString()
    @IsEnum(["في طور الانجاز","قيد الانتظار", "جاهزة للتسليم", "تم تسليم"])
    status:string

    @IsOptional()
    advancedAmount:number
    
    @IsNotEmpty({message:"دخل المدينة"})
    @IsString({message:"دخل  إسم المدينة صحيح"})
    city:string

    @IsDateString({},{message:"تاريخ خاص اكون بحال YYYY-MM-DD"})
    @IsNotEmpty({message: "دخل تاريخ التسليم"})
    deliveryDate:string

    @IsString()
    @IsOptional()
    images?: string[]



}
