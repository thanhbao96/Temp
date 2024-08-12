import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @Column('decimal')
  amount!: number;

  @Column()
  productId!: number;
}
