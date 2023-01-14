import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'catdecatalina1',
      database: 'nestdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule,
    RoleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
