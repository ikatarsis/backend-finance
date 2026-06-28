// хранит бизнес логику

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';

@Injectable()
export class BankService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBankDto: CreateBankDto) {
    return this.prisma.bank.create({
      data: createBankDto,
    });
  }

  findAll() {
    return this.prisma.bank.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.bank.findUnique({
      where: { id },
    });
  }

  update(id: string, updateBankDto: UpdateBankDto) {
    return this.prisma.bank.update({
      where: { id },
      data: updateBankDto,
    });
  }

  remove(id: string) {
    return this.prisma.bank.delete({
      where: { id },
    });
  }
}
