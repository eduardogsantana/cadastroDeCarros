import {IsOptional, IsString} from "class-validator"

export class CreateCadastroDTO{
    @IsString()
    name:string

    @IsString()
    brand:string

    @IsString()
    price?:string

    @IsString()
    year?:string

    @IsString()
    km?:string

    @IsString()
    description:string

    @IsOptional()
    image?:string
}