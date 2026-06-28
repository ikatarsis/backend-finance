import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsString, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ReorderUserBankItemDto {
  @ApiProperty({
    description: 'Идентификатор пользовательской карточки банка',
    example: 'cmcuserbank123456',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Идентификатор пользовательской карточки банка',
    example: 'cmcuserbank123456',
  })
  @IsInt()
  @Min(0)
  displayOrder: number;
}

export class UpdateUserBankOrderDTO {
  @ApiProperty({
    description: 'Новый порядок карточек банков пользователя',
    type: [ReorderUserBankItemDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReorderUserBankItemDto)
  items: ReorderUserBankItemDto[];
}
