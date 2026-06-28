import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateGoalDto {
  @ApiProperty({
    description: 'Идентификатор пользовательского банка',
    example: 'cmcuserbank123456',
  })
  @IsString()
  userBankId: string;

  @ApiProperty({
    description: 'Название цели',
    example: 'Отпуск',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Целевая сумма',
    example: 300000,
  })
  targetAmount: number;

  @ApiProperty({
    description: 'Текущая накопленная сумма',
    example: 50000,
  })
  @IsNumber()
  currentAmount: number;

  @ApiProperty({
    description: 'Код валюты',
    example: 'RUB',
  })
  @IsString()
  currencyCode: string;

  @ApiProperty({
    description: 'URL иконки цели',
    example: 'https://cdn.example.com/goals/travel.png',
  })
  @IsString()
  iconUrl: string;

  @ApiPropertyOptional({
    description: 'Идентификатор связанного накопительного счета',
    example: 'cmcsavingaccount123456',
  })
  @IsOptional()
  @IsString()
  savingsAccountId?: string;

  @ApiProperty({
    description: 'Дедлайн цели',
    example: '2026-12-31T00:00:00.000Z',
  })
  @IsDateString()
  deadlineAt: string;

  @ApiProperty({
    description: 'Признак завершенной цели',
    example: false,
  })
  @IsBoolean()
  isCompleted: boolean;
}
