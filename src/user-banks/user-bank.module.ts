import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UserBankController } from './user-bank.conroller';
import { UserBankService } from './user-bank.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserBankController],
  providers: [UserBankService],
})
export class UserBankModule {}
