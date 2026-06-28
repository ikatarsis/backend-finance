import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateBankDto {
  @ApiPropertyOptional({
    description: 'Новое название банка',
    example: 'T-Bank',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Новый URL изображения или логотипа банка',
    example: 'https://cdn.example.com/banks/tbank.png',
  })
  @IsOptional()
  @IsString()
  imageUrl?: string;
}
