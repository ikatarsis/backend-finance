import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TransactionType } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({
    description: 'Идентификатор пользователя',
    example: 'cmcuser123456',
  })
  @IsString()
  userAuthId: string;

  @ApiProperty({
    description: 'Тип операции',
    enum: TransactionType,
    example: TransactionType.expense,
  })
  @IsEnum(TransactionType)
  type: TransactionType;

  @ApiProperty({
    description: 'Сумма операции',
    example: 2590,
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    description: 'Код валюты операции',
    example: 'RUB',
  })
  @IsString()
  currencyCode: string;

  @ApiProperty({
    description: 'Идентификатор категории',
    example: 'cmccategory123456',
  })
  @IsString()
  categoryId: string;

  @ApiPropertyOptional({
    description:
      'Идентификатор накопительного счета, если операция к нему относится',
    example: 'cmcsavingaccount123456',
  })
  @IsOptional()
  @IsString()
  savingsAccountId?: string;

  @ApiProperty({
    description: 'Краткий заголовок операции',
    example: 'Покупка продуктов',
  })
  @IsString()
  title: string;

  @ApiPropertyOptional({
    description: 'Дополнительная заметка к операции',
    example: 'Пятерочка у дома',
  })
  @IsOptional()
  @IsString()
  note?: string;

  @ApiProperty({
    description: 'Дата совершения операции',
    example: '2026-06-20T18:30:00.000Z',
  })
  @IsDateString()
  transactionDate: string;
}
