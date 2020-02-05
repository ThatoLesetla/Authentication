import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './services/auth/auth.service';
/* import { UsersModule } from './modules/users/users.module';
import { UsersService } from './services/users/users.service'; */

@Module({
  imports: [AuthModule /* , UsersModule */],
  controllers: [AppController],
  providers: [AppService /*, AuthService , UsersService */]
})
export class AppModule {}
