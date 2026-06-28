import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { SavingAccountController } from './saving-account.contoller';
import { SavingAccountService } from './saving-account.service';

@Module({
  imports: [PrismaModule],
  controllers: [SavingAccountController],
  providers: [SavingAccountService],
})
export class SavingAccountModule {}
