import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from 'src/entity';
import { CreateTransactionDto } from '../dto/create-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const transaction = this.transactionRepository.create(createTransactionDto);
    return this.transactionRepository.save(transaction);
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find();
  }
}
