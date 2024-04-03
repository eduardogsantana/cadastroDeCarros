import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { CadastroController, } from "./cadastro.controller";
import { CadastroService, } from "./cadastro.service";


@Module({
    imports: [PrismaModule],
    controllers: [CadastroController],
    exports: [],
    providers: [CadastroService],
})
export class CadastroModule{
    
}