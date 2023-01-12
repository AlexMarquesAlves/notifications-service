import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['grand-crappie-6067-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Z3JhbmQtY3JhcHBpZS02MDY3JP5bhSDVp0vzIyVkd-0fBl0KDF7tzP8FzLv-s-0',
          password:
            '7v22bp2zGpgWhRPWkyUjIOg0jd6h07frmhkN1XcvV_SyvUerUoWMP7oZncPTi8okmJM4fQ==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
