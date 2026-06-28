import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSavingAccountDto {
  @ApiPropertyOptional({
    description: 'Новое название накопительного счета',
    example: 'Резерв',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Новый баланс накопительного счета',
    example: 180000,
  })
  @IsOptional()
  @IsNumber()
  balance?: number;

  @ApiPropertyOptional({
    description: 'Новый код валюты счета',
    example: 'USD',
  })
  @IsOptional()
  @IsString()
  currencyCode?: string;

  @ApiPropertyOptional({
    description: 'Признак архивного счета',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isArchived: boolean;
}
