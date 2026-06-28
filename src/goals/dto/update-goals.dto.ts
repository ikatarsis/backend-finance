import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateGoalDto {
  @ApiPropertyOptional({
    description: 'Новое название цели',
    example: 'Новый ноутбук',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    description: 'Новая целевая сумма',
    example: 350000,
  })
  @IsOptional()
  @IsNumber()
  targetAmount?: number;

  @ApiPropertyOptional({
    description: 'Новая текущая сумма',
    example: 80000,
  })
  @IsOptional()
  @IsNumber()
  currentAmount?: number;

  @ApiPropertyOptional({
    description: 'Новый код валюты',
    example: 'USD',
  })
  @IsOptional()
  @IsString()
  currencyCode?: string;

  @ApiPropertyOptional({
    description: 'Новый URL иконки цели',
    example: 'https://cdn.example.com/goals/laptop.png',
  })
  @IsOptional()
  @IsString()
  iconUrl?: string;

  @ApiPropertyOptional({
    description: 'Новый связанный накопительный счет',
    example: 'cmcsavingaccount123456',
  })
  @IsOptional()
  @IsString()
  savingsAccountId?: string;

  @ApiPropertyOptional({
    description: 'Новый дедлайн',
    example: '2027-03-01T00:00:00.000Z',
  })
  @IsOptional()
  @IsDateString()
  deadlineAt?: string;

  @ApiPropertyOptional({
    description: 'Признак завершенной цели',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;
}
