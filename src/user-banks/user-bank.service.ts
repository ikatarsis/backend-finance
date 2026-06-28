import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserBankDto } from './dto/create-user-bank.dto';
import { UpdateUserBankOrderDTO } from './dto/update-user-bank-order.dto';

//разрешить NestJS автоматически создавать экземпляр этого класса и внедрять его туда, где он нужен
//чтобы не писать const service = new BankService()
@Injectable()
export class UserBankService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserBankDto: CreateUserBankDto) {
    const lastUserBank = await this.prisma.userBank.findFirst({
      where: {
        userAuthId: createUserBankDto.userAuthId,
      },
      orderBy: {
        displayOrder: 'desc',
      },
    });

    const nextDisplayOrder = lastUserBank ? lastUserBank.displayOrder + 1 : 0;

    return this.prisma.userBank.create({
      data: {
        userAuthId: createUserBankDto.userAuthId,
        bankId: createUserBankDto.bankId,
        displayOrder: nextDisplayOrder,
      },
    });
  }

  findAllByUser(userAuthId: string) {
    return this.prisma.userBank.findMany({
      where: {
        userAuthId,
      },
      include: {
        bank: true,
      },
      orderBy: {
        displayOrder: 'asc',
      },
    });
  }

  remove(id: string) {
    return this.prisma.userBank.delete({
      where: { id },
    });
  }

  async reorder(updateUserBankOrderDto: UpdateUserBankOrderDTO) {
    const operations = updateUserBankOrderDto.items.map((item) =>
      this.prisma.userBank.update({
        where: { id: item.id },
        data: { displayOrder: item.displayOrder },
      }),
    );

    return this.prisma.$transaction(operations);
  }
}
