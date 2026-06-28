import { ApiPropertyOptional } from '@nestjs/swagger';
import { TransactionType } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateTransactionDto {
  @ApiPropertyOptional({
    description: 'Новый тип операции',
    enum: TransactionType,
    example: TransactionType.income,
  })
  @IsOptional()
  @IsEnum(TransactionType)
  type?: TransactionType;

  @ApiPropertyOptional({
    description: 'Новая сумма операции',
    example: 5000,
  })
  @IsOptional()
  @IsNumber()
  amount?: number;

  @ApiPropertyOptional({
    description: 'Новый код валюты',
    example: 'USD',
  })
  @IsOptional()
  @IsString()
  currencyCode?: string;

  @ApiPropertyOptional({
    description: 'Новая категория операции',
    example: 'cmccategory123456',
  })
  @IsOptional()
  @IsString()
  categoryId?: string;

  @ApiPropertyOptional({
    description: 'Новый связанный накопительный счет',
    example: 'cmcsavingaccount123456',
  })
  @IsOptional()
  @IsString()
  savingsAccountId?: string;

  @ApiPropertyOptional({
    description: 'Новый заголовок операции',
    example: 'Зарплата за июнь',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    description: 'Новая заметка',
    example: 'Перевод от работодателя',
  })
  @IsOptional()
  @IsString()
  note?: string;

  @ApiPropertyOptional({
    description: 'Новая дата операции',
    example: '2026-06-21T09:00:00.000Z',
  })
  @IsOptional()
  @IsDateString()
  transactionDate?: string;
}
