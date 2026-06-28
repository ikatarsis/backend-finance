import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateSavingAccountDto {
  @ApiProperty({
    description: 'Идентификатор пользовательского банка',
    example: 'cmcuserbank123456',
  })
  @IsString()
  userBankId: string;

  @ApiProperty({
    description: 'Название накопительного счета',
    example: 'Подушка безопасности',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Текущий баланс накопительного счета',
    example: 150000,
  })
  @IsNumber()
  balance: number;

  @ApiProperty({
    description: 'Код валюты счета',
    example: 'RUB',
  })
  @IsString()
  currencyCode: string;

  @ApiProperty({
    description: 'Признак архивного счета',
    example: false,
  })
  @IsBoolean()
  isArchived: boolean;
}
