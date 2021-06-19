import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PayMethod } from '../models/pay-method.interface';
import { PayMethodService } from '../service/pay-method.service';

@Controller('pay-methods')
export class PayMethodController {
    constructor(private payMethodService: PayMethodService) {}

    @Get()
    findAll(): Observable<PayMethod[]> {
        return this.payMethodService.findAll();
    }
}
