import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateCadastroDTO } from "./dto/create-cadastro-dto";
import { CadastroService, } from "./cadastro.service";
import { UpdateCadastroDTO } from "./dto/update-cadastro-dto";
import { UpdatePatchCadastroDTO } from "./dto/uptdate-patch-cadastro-dto";

@Controller('cars')
export class CadastroController{
    constructor(private readonly cadastroService: CadastroService){}

    @Post()
    async create(@Body() data:CreateCadastroDTO){
        return this.cadastroService.create(data)
    }
    @Get()
    async read(){
        return this.cadastroService.list()
    }
    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id){
        return this.cadastroService.show(id)
    }
    @Put(':id')
    async update(@Body() data: UpdateCadastroDTO, @Param('id', ParseIntPipe) id){
        return this.cadastroService.update(id, data)
    }
    @Patch(':id')
    async updatePartial(@Body() data : UpdatePatchCadastroDTO, @Param ('id', ParseIntPipe) id){
        return this.cadastroService.updatePartial(id, data)
    }
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id:number ){
        return this.cadastroService.delete(id)
    }
}


