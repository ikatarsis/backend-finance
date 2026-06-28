import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SavingAccountService } from './saving-account.service';
import { CreateSavingAccountDto } from './dto/create-saving-account.dto';
import { UpdateSavingAccountDto } from './dto/update-saving-account.dto';

@ApiTags('Saving Accounts')
@Controller('saving-accounts')
export class SavingAccountController {
  constructor(private readonly savingAccountService: SavingAccountService) {}

  @Post()
  @ApiOperation({
    summary: 'Создать накопительный счет',
    description:
      'Создает новый накопительный счет для выбранного пользовательского банка.',
  })
  @ApiBody({ type: CreateSavingAccountDto })
  @ApiResponse({
    status: 201,
    description: 'Накопительный счет успешно создан',
  })
  create(@Body() createSavingAccountDto: CreateSavingAccountDto) {
    return this.savingAccountService.create(createSavingAccountDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Получить список накопительных счетов',
    description: 'Возвращает список всех накопительных счетов.',
  })
  @ApiResponse({
    status: 200,
    description: 'Список накопительных счетов успешно получен',
  })
  findAll() {
    return this.savingAccountService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Получить накопительный счет по id',
    description: 'Возвращает один накопительный счет по его идентификатору.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор накопительного счета',
    example: 'cmcsavingaccount123456',
  })
  @ApiResponse({
    status: 200,
    description: 'Накопительный счет успешно найден',
  })
  findOne(@Param('id') id: string) {
    return this.savingAccountService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Обновить накопительный счет',
    description: 'Частично обновляет данные накопительного счета.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор накопительного счета',
    example: 'cmcsavingaccount123456',
  })
  @ApiBody({ type: UpdateSavingAccountDto })
  @ApiResponse({
    status: 200,
    description: 'Накопительный счет успешно обновлен',
  })
  update(
    @Param('id') id: string,
    @Body() updateSavingAccountDto: UpdateSavingAccountDto,
  ) {
    return this.savingAccountService.update(id, updateSavingAccountDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Удалить накопительный счет',
    description: 'Удаляет накопительный счет по идентификатору.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор накопительного счета',
    example: 'cmcsavingaccount123456',
  })
  @ApiResponse({
    status: 200,
    description: 'Накопительный счет успешно удален',
  })
  remove(@Param('id') id: string) {
    return this.savingAccountService.remove(id);
  }
}
