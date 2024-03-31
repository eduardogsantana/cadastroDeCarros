import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateCadastroDTO } from "./dto/create-cadastro-dto";
import { UpdateCadastroDTO } from "./dto/update-cadastro-dto";
import { UpdatePatchCadastroDTO } from "./dto/uptdate-patch-cadastro-dto";
@Injectable()
export class CadastroService{
    constructor(private readonly prisma: PrismaService){}
    async create({name,brand,price, year, km, description, image}: CreateCadastroDTO){
        return this.prisma.cad_cars.create({
            data: {
                name,
                brand,
                price,
                year,
                km,
                description,
                image,
            }
        })
    }
    async list(){
        return this.prisma.cad_cars.findMany()
    }
    async show (id:number){
        return this.prisma.cad_cars.findUnique({
            where:{
                id,
            }
        })
    }
    async update(id:number, data:UpdateCadastroDTO){
        return this.prisma.cad_cars.update({
            data,
            where:{
                id,
            }
        })
    }
    async updatePartial(id:number, data:UpdatePatchCadastroDTO){
        if(!(await this.show(id))){
            throw new NotFoundException(`Usuário ${id} não encontrado.`)
        }
        return this.prisma.cad_cars.update({
            data,
            where: {
                id,
            }
            
        })
        }
    async delete(id: number) {
        if (!(await this.show(id))){
            throw new NotFoundException(`Usuário ${id} não encontrado.`)
        }
        return this.prisma.cad_cars.delete({
            where:{
                id,
            }
        })
    }
}
