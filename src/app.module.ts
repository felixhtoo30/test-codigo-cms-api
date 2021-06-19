import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { VoucherModule } from './voucher/voucher.module';
import { PayMethodModule } from './pay-method/pay-method.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), VoucherModule, PayMethodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
