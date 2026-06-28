import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { TransactionController } from './transactions.controller';
import { TransactionService } from './transactions.service';

@Module({
  imports: [PrismaModule],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
