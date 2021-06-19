import { Module } from '@nestjs/common';
import { VoucherService } from './service/voucher.service';
import { VoucherController } from './controller/voucher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoucherEntity } from './models/voucher.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([VoucherEntity])
  ],
  providers: [VoucherService],
  controllers: [VoucherController]
})
export class VoucherModule {}
