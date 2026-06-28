// принимает хттп-запросы

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BankService } from './bank.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Banks')
@Controller('banks')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Post()
  @ApiOperation({
    summary: 'Создать банк в справочнике',
    description:
      'Добавляет новый банк в общий каталог доступных банков для экрана выбора банка.',
  })
  @ApiBody({ type: CreateBankDto })
  @ApiResponse({ status: 201, description: 'Банк успешно создан' })
  create(@Body() createBankDto: CreateBankDto) {
    return this.bankService.create(createBankDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Получить список банков из справочника',
    description:
      'Возвращает все доступные банки, которые можно показать на экране добавления банка.',
  })
  @ApiResponse({ status: 200, description: 'Список банков успешно получен' })
  findAll() {
    return this.bankService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Получить банк по id',
    description: 'Возвращает банк из справочника по его идентификатору.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор банка',
    example: 'cmcwb1d4k0000v3i8z8m1p9x1',
  })
  @ApiResponse({ status: 200, description: 'Банк успешно найден' })
  findOne(@Param('id') id: string) {
    return this.bankService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Обновить банк в справочнике',
    description: 'Частично обновляет данные банка в общем справочнике.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор банка',
    example: 'cmcwb1d4k0000v3i8z8m1p9x1',
  })
  @ApiBody({ type: UpdateBankDto })
  @ApiResponse({ status: 200, description: 'Банк успешно обновлен' })
  update(@Param('id') id: string, @Body() updateBankDto: UpdateBankDto) {
    return this.bankService.update(id, updateBankDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Удалить банк из справочника',
    description: 'Удаляет банк из общего каталога доступных банков.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор банка',
    example: 'cmcwb1d4k0000v3i8z8m1p9x1',
  })
  @ApiResponse({ status: 200, description: 'Банк успешно удален' })
  remove(@Param('id') id: string) {
    return this.bankService.remove(id);
  }
}
