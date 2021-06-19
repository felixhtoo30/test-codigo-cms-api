import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Voucher } from './voucher.interface';

@Entity({ name: 'voucher' })
export class VoucherEntity implements Voucher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 500, nullable: true })
  description: string;

  @Column('date')
  expiry_date: string;

  @Column({ length: 500, nullable: true })
  img: string;

  @Column({ length: 30 })
  amount: string;

  @Column('int')
  qty: number;

  @Column('int')
  buy_type: number;

  @Column('int')
  disc_pay_method: number;

  @Column('int')
  active_state: number;

  @Column('int', { nullable: true })
  max_buy_limit: number;

  @Column('int', { nullable: true })
  max_gift_limit: number;

  @Column('timestamp', { nullable: true })
  created_at: string;

  @Column('timestamp', { nullable: true })
  updated_at: string;
}
