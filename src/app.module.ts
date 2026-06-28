import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BankModule } from './banks/bank.module';
import { UserBankModule } from './user-banks/user-bank.module';
import { SavingAccountModule } from './saving-accounts/saving-account.module';
import { GoalsModule } from './goals/goals.module';
import { CategoryModule } from './categories/categories.module';
import { TransactionModule } from './transactions/transactions.module';

@Module({
  imports: [
    PrismaModule,
    BankModule,
    UserBankModule,
    SavingAccountModule,
    GoalsModule,
    CategoryModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
