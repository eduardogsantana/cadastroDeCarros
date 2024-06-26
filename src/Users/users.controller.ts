import { Body, Controller, Post, Get, Param, Put, Patch, Delete, ParseIntPipe, UnauthorizedException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-users.dto";
import { UpdateUserDTO } from "./dto/update-users-dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-users-dto";
import { UserService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create(data)
    }

    @Get()
    async read() {
        return this.userService.list()
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id) {
        return this.userService.show(id)
    }

    @Put(':id')
    async update(@Body() data: UpdateUserDTO, @Param('id', ParseIntPipe) id) {
        return this.userService.update(id, data)
    }

    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id) {
        return this.userService.updatePartial(id, data)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.userService.delete(id)
    }

    @Post('login')
    async login(@Body() loginDto: { username: string, password: string }) {
      const { username, password } = loginDto;
      try {
        const user = await this.userService.validateLogin(username, password);
        // Aqui você pode fazer algo com o usuário, como gerar um token de autenticação e enviá-lo como resposta
        return { message: 'Login bem-sucedido', user };
      } catch (error) {
        if (error instanceof UnauthorizedException) {
          if (error.message === 'Nome de usuário incorreto.') {
            throw new UnauthorizedException('Nome de usuário incorreto.');
          } else if (error.message === 'Senha incorreta.') {
            throw new UnauthorizedException('Senha incorreta.');
          } else {
            throw new UnauthorizedException('Credenciais inválidas.');
          }
        } else {
          throw error; // Lançar a exceção original se não for do tipo UnauthorizedException
        }
      }
    }

    @Post(':clientId/favorite-car/:carId')
    async favoriteCar(
      @Param('clientId') clientId: string,
      @Param('carId') carId: string,
    ) {
      return this.userService.favoriteCar(Number(clientId), Number(carId))
    }

    @Delete(':clientId/unfavorite-car/:carId')
    async unfavoriteCar(
      @Param('clientId') clientId: string,
      @Param('carId') carId: string,
    ) {
      return this.userService.unfavoriteCar(Number(clientId), Number(carId))
    }
  
    @Get(':clientId/favorite-cars')
    async getFavoriteCars(@Param('clientId') clientId: string) {
      return this.userService.getFavoriteCars(Number(clientId))
    }

    @Get(':userId/favorite')
    async listFavoriteCar(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.getClientWithFavoriteCars(userId)
    }
    
}