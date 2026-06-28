import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsString, Matches, Min } from 'class-validator';
import { TransactionType } from '@prisma/client';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Название категории',
    example: 'Продукты',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Тип категории',
    enum: TransactionType,
    example: TransactionType.expense,
  })
  @IsEnum(TransactionType)
  type: TransactionType;

  @ApiProperty({
    description: 'Имя иконки категории',
    example: 'cart',
  })
  @IsString()
  iconName: string;

  @ApiProperty({
    description: 'HEX-цвет категории',
    example: '#34C759',
  })
  @IsString()
  @Matches(/^#([A-Fa-f0-9]{6})$/, {
    message: 'colorHex must be a valid HEX color like #34C759',
  })
  colorHex: string;

  @ApiProperty({
    description: 'Порядок отображения категории',
    example: 1,
  })
  @IsInt()
  @Min(0)
  displayOrder: number;
}
