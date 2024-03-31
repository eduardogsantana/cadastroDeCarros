import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-users.dto";
import { UpdateUserDTO } from "./dto/update-users-dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-users-dto";
import { PrismaService } from "src/prisma/prisma.service";
import { cad_cars, Favorite, user_login } from "@prisma/client";


@Injectable()
export class UserService {
    constructor (private readonly prisma: PrismaService) {}
    async create({name, email, user, cpf, password}: CreateUserDTO) {
        return this.prisma.user_login.create({
            data:{
                name,
                user,
                email,
                cpf,
                password
            }
        })
    }
    async list(){
        return this.prisma.user_login.findMany()
    }

    async show(id: number) {
        return this.prisma.user_login.findUnique({
            where:{
                id,
            }
        })
    }
    async update(id: number, data: UpdateUserDTO){
        if (!(await this.show(id))){
            throw new NotFoundException(`Usuário ${id} não encontrado.`)
        }
        return this.prisma.user_login.update({
            data,
            where: {
                id,
            }
            
        })
    }
    async updatePartial(id: number, data: UpdatePatchUserDTO){
        if (!(await this.show(id))){
            throw new NotFoundException(`Usuário ${id} não encontrado.`)
        }
        return this.prisma.user_login.update({
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
        return this.prisma.user_login.delete({
            where:{
                id,
            }
        })
    }
    async favoriteCar(clientId: number, carId: number): Promise<Favorite> {
        return this.prisma.favorite.create({
          data: {
            clientId,
            carId,
          },
        });
      }
    
      async unfavoriteCar(clientId: number, carId: number): Promise<void> {
        await this.prisma.favorite.deleteMany({
          where: {
            clientId,
            carId,
          },
        });
      }
    
      async getFavoriteCars(clientId: number): Promise<number[]> {
        const favorites = await this.prisma.favorite.findMany({
          where: {
            clientId,
          },
          select: {
            carId: true,
          },
        });
        return favorites.map((favorite) => favorite.carId);
      }

      async getClientWithFavoriteCars(clientId: number): Promise<{ client: user_login, favoriteCars: cad_cars[] }> {
        const client = await this.prisma.user_login.findUnique({
          where: {
            id: clientId,
          },
        });
    
        const favoriteCars = await this.prisma.favorite.findMany({
          where: {
            clientId,
          },
          include: {
            car: true,
          },
        }).then(favorites => favorites.map(favorite => favorite.car));
    
        return { client, favoriteCars };
      }
}
