import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Voucher } from '../models/voucher.interface';
import { VoucherService } from '../service/voucher.service';

@Controller('vouchers')
export class VoucherController {
  constructor(private voucherService: VoucherService) {}

  @Post('/create')
  create(@Body() voucher: Voucher): Observable<Voucher> {
    return this.voucherService.create(voucher);
  }

  @Get(':id')
  findOne(@Param() params): Observable<Voucher> {
    return this.voucherService.findOne(params.id);
  }

  @Get()
  findAll(): Observable<Voucher[]> {
    return this.voucherService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): Observable<any> {
    return this.voucherService.deleteOne(Number(id));
  }

  @Put(':id')
  updateOne(
    @Param('id') id: string,
    @Body() voucher: Voucher,
  ): Observable<any> {
    return this.voucherService.updateOne(Number(id), voucher);
  }
}
