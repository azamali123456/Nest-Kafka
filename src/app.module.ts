import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { KafkaModule } from './kafka/kafka.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'developmet',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true, // Enable logging to see additional information
    }),
    UserModule,
    KafkaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor() {
    // Output a message when the AppModule is created
    console.log('AppModule created.');
  }
}
