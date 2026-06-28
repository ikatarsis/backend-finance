import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserBankDto {
  @ApiProperty({
    description: 'Идентификатор пользователя',
    example: 'cmcuser123456',
  })
  @IsString()
  userAuthId: string;

  @ApiProperty({
    description: 'Идентификатор банка из справочника',
    example: 'cmcuser123456',
  })
  @IsString()
  bankId: string;
}
