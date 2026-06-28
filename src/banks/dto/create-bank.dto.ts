import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBankDto {
  @ApiProperty({
    description: 'Название банка',
    example: 'Sber',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'URL изображения или логотипа банка',
    example: 'https://cdn.example.com/banks/sber.png',
  })
  @IsString()
  imageUrl: string;
}
