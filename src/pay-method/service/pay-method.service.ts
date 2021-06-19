import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { PayMethodEntity } from '../models/pay-method.entity';
import { PayMethod } from '../models/pay-method.interface';

@Injectable()
export class PayMethodService {
  constructor(
    @InjectRepository(PayMethodEntity)
    private readonly payMethodRepositiory: Repository<PayMethodEntity>,
  ) {}

  findAll(): Observable<PayMethod[]> {
    return from(this.payMethodRepositiory.find());
  }
}
