import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Matches,
  Min,
} from 'class-validator';
import { TransactionType } from '@prisma/client';

export class UpdateCategoryDto {
  @ApiPropertyOptional({
    description: 'Новое название категории',
    example: 'Супермаркет',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Новый тип категории',
    enum: TransactionType,
    example: TransactionType.expense,
  })
  @IsOptional()
  @IsEnum(TransactionType)
  type?: TransactionType;

  @ApiPropertyOptional({
    description: 'Новое имя иконки категории',
    example: 'bag',
  })
  @IsOptional()
  @IsString()
  iconName?: string;

  @ApiPropertyOptional({
    description: 'Новый HEX-цвет категории',
    example: '#FF9500',
  })
  @IsOptional()
  @IsString()
  @Matches(/^#([A-Fa-f0-9]{6})$/, {
    message: 'colorHex must be a valid HEX color like #FF9500',
  })
  colorHex?: string;

  @ApiPropertyOptional({
    description: 'Новый порядок отображения категории',
    example: 2,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  displayOrder?: number;
}
