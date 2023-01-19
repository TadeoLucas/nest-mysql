import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RoleModule } from './role/role.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';


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
    ConfigModule.forRoot({ isGlobal: true , envFilePath: '.env'}), //no funciona por ahora
    UsersModule,
    RoleModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }



// TypeOrmModule.forRootAsync({
//       inject: [ConfigService],
//       useFactory: (config: ConfigService) => ({
//         type: 'mysql',
//         host: config.get<string>('DB_HOST'),
//         port: parseInt(config.get<string>('DB_PORT'), 10),
//         username: config.get<string>('DB_USER'),
//         password: config.get<string>('DB_PASS'),
//         database: config.get<string>('DB_NAME'),
//         entities: [__dirname + '/**/*.entity{.ts,.js}'],
//         synchronize: true
//       })
//     }),