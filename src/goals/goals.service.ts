import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGoalDto } from './dto/create-goals.dto';
import { UpdateGoalDto } from './dto/update-goals.dto';

@Injectable()
export class GoalsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGoalDto: CreateGoalDto) {
    return this.prisma.goal.create({
      data: {
        userBankId: createGoalDto.userBankId,
        title: createGoalDto.title,
        targetAmount: createGoalDto.targetAmount,
        currentAmount: createGoalDto.currentAmount,
        currencyCode: createGoalDto.currencyCode,
        iconUrl: createGoalDto.iconUrl,
        savingsAccountId: createGoalDto.savingsAccountId,
        deadlineAt: new Date(createGoalDto.deadlineAt),
        isCompleted: createGoalDto.isCompleted,
      },
    });
  }

  findAll() {
    return this.prisma.goal.findMany({
      // why this polya
      include: {
        userBank: true,
        savingsAccount: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.goal.findUnique({
      where: { id },
      include: {
        userBank: true,
        savingsAccount: true,
      },
    });
  }

  update(id: string, updateGoalDto: UpdateGoalDto) {
    return this.prisma.goal.update({
      where: { id },
      data: {
        ...(updateGoalDto.title !== undefined && {
          title: updateGoalDto.title,
        }),
        ...(updateGoalDto.targetAmount !== undefined && {
          targetAmount: updateGoalDto.targetAmount,
        }),
        ...(updateGoalDto.currentAmount !== undefined && {
          currentAmount: updateGoalDto.currentAmount,
        }),
        ...(updateGoalDto.currencyCode !== undefined && {
          currencyCode: updateGoalDto.currencyCode,
        }),
        ...(updateGoalDto.iconUrl !== undefined && {
          iconUrl: updateGoalDto.iconUrl,
        }),
        ...(updateGoalDto.savingsAccountId !== undefined && {
          savingsAccountId: updateGoalDto.savingsAccountId,
        }),
        ...(updateGoalDto.deadlineAt !== undefined && {
          deadlineAt: new Date(updateGoalDto.deadlineAt),
        }),
        ...(updateGoalDto.isCompleted !== undefined && {
          isCompleted: updateGoalDto.isCompleted,
        }),
      },
    });
  }

  remove(id: string) {
    return this.prisma.goal.delete({
      where: { id },
    });
  }
}
