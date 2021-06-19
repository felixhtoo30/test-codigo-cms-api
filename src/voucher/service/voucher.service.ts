import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { VoucherEntity } from '../models/voucher.entity';
import { Voucher } from '../models/voucher.interface';

@Injectable()
export class VoucherService {
  constructor(
    @InjectRepository(VoucherEntity)
    private readonly voucherRepository: Repository<VoucherEntity>,
  ) {}

  create(voucher: Voucher): Observable<Voucher> {
    return from(this.voucherRepository.save(voucher));
  }

  findAll(): Observable<Voucher[]> {
    return from(this.voucherRepository.find());
  }

  findOne(id: number): Observable<Voucher> {
    return from(this.voucherRepository.findOne(id));
  }

  deleteOne(id: number): Observable<any> {
    return from(this.voucherRepository.delete(id));
  }

  updateOne(id: number, voucher: Voucher): Observable<any> {
    return from(this.voucherRepository.update(id, voucher));
  }
}
