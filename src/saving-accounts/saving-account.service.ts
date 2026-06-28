import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSavingAccountDto } from './dto/create-saving-account.dto';
import { UpdateSavingAccountDto } from './dto/update-saving-account.dto';

@Injectable()
export class SavingAccountService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSavingAccountDto: CreateSavingAccountDto) {
    return this.prisma.savingAccount.create({
      data: {
        userBankId: createSavingAccountDto.userBankId,
        name: createSavingAccountDto.name,
        balance: createSavingAccountDto.balance,
        currencyCode: createSavingAccountDto.currencyCode,
        isArchived: createSavingAccountDto.isArchived,
      },
    });
  }

  findAll() {
    return this.prisma.savingAccount.findMany({
      include: {
        userBank: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.savingAccount.findUnique({
      where: { id },
      include: {
        userBank: true,
        goals: true,
        transactions: true,
      },
    });
  }

  update(id: string, updateSavingAccountDto: UpdateSavingAccountDto) {
    return this.prisma.savingAccount.update({
      where: { id },
      data: {
        ...(updateSavingAccountDto.name !== undefined && {
          name: updateSavingAccountDto.name,
        }),
        ...(updateSavingAccountDto.balance !== undefined && {
          balance: updateSavingAccountDto.balance,
        }),
        ...(updateSavingAccountDto.currencyCode !== undefined && {
          currencyCode: updateSavingAccountDto.currencyCode,
        }),
        ...(updateSavingAccountDto.isArchived !== undefined && {
          isArchived: updateSavingAccountDto.isArchived,
        }),
      },
    });
  }

  remove(id: string) {
    return this.prisma.savingAccount.delete({
      where: { id },
    });
  }
}
