import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { PayMethod } from './pay-method.interface';

@Entity({ name: 'pay_method' })
export class PayMethodEntity implements PayMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('timestamp', { nullable: true })
  created_at: string;

  @Column('timestamp', { nullable: true })
  updated_at: string;
}
