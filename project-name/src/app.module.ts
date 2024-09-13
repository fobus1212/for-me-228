import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '88888888',
      database: 'fobusdb',
      entities: [],
      synchronize: true, // Будьте осторожны с этой опцией в продакшене
    }),
    // Другие модули
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

