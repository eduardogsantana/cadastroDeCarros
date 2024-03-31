import { IsEmail, IsString, IsStrongPassword } from "class-validator";


export class CreateUserDTO{
    @IsString()
    name: string

    @IsString()
    user: string
    
    @IsEmail()
    email: string

    @IsString()
    cpf:string

    @IsStrongPassword({
        minLength: 6,
        minUppercase: 1,
        minLowercase: 1,
        minSymbols: 1
    },{message:"A senha deve ter pelo menos 6 caracteres, conter uma letra maiuscula, uma letra minúscula e um símbolo especial."})
    password: string
}