import { IsNotEmpty, IsString, IsOptional, IsNumber, IsEnum, IsDate, IsArray, IsAlphanumeric  } from "class-validator";

export class CreateCommandDto {
    @IsNotEmpty()
    @IsNumber()
    price:number

    @IsNotEmpty()
    @IsEnum(["خالص", "غير خالص","تسبيق" ])
    situation:string

    @IsString()
    @IsEnum(["في طور الانجاز","قيد الانتظار", "جاهزة للتسليم", "تم تسليم"])
    status:string

    @IsNumber()
    @IsOptional()
    advancedAmount:number

    @IsString()
    @IsNotEmpty()
    city:string

    @IsDate()
    @IsNotEmpty()
    deliveryDate:Date

    @IsString()
    @IsOptional()
    image: string



}
