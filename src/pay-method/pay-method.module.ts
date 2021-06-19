import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayMethodEntity } from './models/pay-method.entity';
import { PayMethodController } from './controller/pay-method.controller';
import { PayMethodService } from './service/pay-method.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PayMethodEntity])
  ],
  providers: [PayMethodService],
  controllers: [PayMethodController]
})
export class PayMethodModule {}
