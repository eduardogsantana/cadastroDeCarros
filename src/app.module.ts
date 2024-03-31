import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastroModule } from './Cadastro/cadastro.module';
import { UsersModule } from './Users/users.module';
@Module({
  imports: [CadastroModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
