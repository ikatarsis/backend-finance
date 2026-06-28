import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserBankService } from './user-bank.service';
import { CreateUserBankDto } from './dto/create-user-bank.dto';
import { UpdateUserBankOrderDTO } from './dto/update-user-bank-order.dto';

@ApiTags('User Banks')
@Controller('user-banks')
export class UserBankController {
  constructor(private readonly userBankService: UserBankService) {}

  @Post()
  @ApiOperation({
    summary: 'Добавить банк пользователю',
    description:
      'Создает карточку банка у пользователя на главной странице на основе банка из справочника.',
  })
  @ApiBody({ type: CreateUserBankDto })
  @ApiResponse({
    status: 201,
    description: 'Банк успешно добавлен пользователю',
  })
  create(@Body() createUserBankDto: CreateUserBankDto) {
    return this.userBankService.create(createUserBankDto);
  }

  @Get(':userAuthId')
  @ApiOperation({
    summary: 'Получить банки пользователя',
    description:
      'Возвращает все карточки банков пользователя в порядке отображения.',
  })
  @ApiParam({
    name: 'userAuthId',
    description: 'Идентификатор пользователя',
    example: 'cmcuser123456',
  })
  @ApiResponse({
    status: 200,
    description: 'Список банков пользователя успешно получен',
  })
  findAllByUser(@Param('userAuthId') userAuthId: string) {
    return this.userBankService.findAllByUser(userAuthId);
  }

  @Patch('reorder')
  @ApiOperation({
    summary: 'Изменить порядок банков пользователя',
    description:
      'Обновляет displayOrder для карточек банков после drag-and-drop.',
  })
  @ApiBody({ type: UpdateUserBankOrderDTO })
  @ApiResponse({ status: 200, description: 'Порядок банков успешно обновлен' })
  reorder(@Body() updateUserBankOrderDto: UpdateUserBankOrderDTO) {
    return this.userBankService.reorder(updateUserBankOrderDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Удалить банк пользователя',
    description: 'Удаляет карточку банка пользователя с главной страницы.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор пользовательской карточки банка',
    example: 'cmcuserbank123456',
  })
  @ApiResponse({ status: 200, description: 'Банк пользователя успешно удален' })
  remove(@Param('id') id: string) {
    return this.userBankService.remove(id);
  }
}
