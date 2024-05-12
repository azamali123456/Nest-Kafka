import { Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { KafkaController } from './kafka.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports:[
        ClientsModule.register([
            {
              name: 'HERO_SERVICE',
              transport: Transport.KAFKA,
              options: {
                client: {
                  clientId: 'log',
                  brokers: ['localhost:9092'],
                },
                consumer: {
                  groupId: 'log-consumer'
                }
              }
            },
          ]),
    ],
  providers: [KafkaService],
  controllers: [KafkaController]
})
export class KafkaModule {}
