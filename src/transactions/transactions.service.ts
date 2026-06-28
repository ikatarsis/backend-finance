import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transactions.dto';
import { UpdateTransactionDto } from './dto/update-transactions.dto';

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTransactionDto: CreateTransactionDto) {
    return this.prisma.transaction.create({
      data: {
        userAuthId: createTransactionDto.userAuthId,
        type: createTransactionDto.type,
        amount: createTransactionDto.amount,
        currencyCode: createTransactionDto.currencyCode,
        categoryId: createTransactionDto.categoryId,
        savingsAccountId: createTransactionDto.savingsAccountId,
        title: createTransactionDto.title,
        note: createTransactionDto.note,
        transactionDate: new Date(createTransactionDto.transactionDate),
      },
    });
  }

  findAll() {
    return this.prisma.transaction.findMany({
      include: {
        category: true,
        savingsAccount: true,
        userAuth: true,
      },
      orderBy: {
        transactionDate: 'desc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.transaction.findUnique({
      where: { id },
      include: {
        category: true,
        savingsAccount: true,
        userAuth: true,
      },
    });
  }

  update(id: string, updateTransactionDto: UpdateTransactionDto) {
    return this.prisma.transaction.update({
      where: { id },
      data: {
        ...(updateTransactionDto.type !== undefined && {
          type: updateTransactionDto.type,
        }),
        ...(updateTransactionDto.amount !== undefined && {
          amount: updateTransactionDto.amount,
        }),
        ...(updateTransactionDto.currencyCode !== undefined && {
          currencyCode: updateTransactionDto.currencyCode,
        }),
        ...(updateTransactionDto.categoryId !== undefined && {
          categoryId: updateTransactionDto.categoryId,
        }),
        ...(updateTransactionDto.savingsAccountId !== undefined && {
          savingsAccountId: updateTransactionDto.savingsAccountId,
        }),
        ...(updateTransactionDto.title !== undefined && {
          title: updateTransactionDto.title,
        }),
        ...(updateTransactionDto.note !== undefined && {
          note: updateTransactionDto.note,
        }),
        ...(updateTransactionDto.transactionDate !== undefined && {
          transactionDate: new Date(updateTransactionDto.transactionDate),
        }),
      },
    });
  }

  remove(id: string) {
    return this.prisma.transaction.delete({
      where: { id },
    });
  }
}
