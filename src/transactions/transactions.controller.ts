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
import { TransactionService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transactions.dto';
import { UpdateTransactionDto } from './dto/update-transactions.dto';

@ApiTags('Transactions')
@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  @ApiOperation({
    summary: 'Создать операцию',
    description: 'Создает новую финансовую операцию пользователя.',
  })
  @ApiBody({ type: CreateTransactionDto })
  @ApiResponse({ status: 201, description: 'Операция успешно создана' })
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Получить список операций',
    description: 'Возвращает список всех операций.',
  })
  @ApiResponse({ status: 200, description: 'Список операций успешно получен' })
  findAll() {
    return this.transactionService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Получить операцию по id',
    description: 'Возвращает одну операцию по идентификатору.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор операции',
    example: 'cmctransaction123456',
  })
  @ApiResponse({ status: 200, description: 'Операция успешно найдена' })
  findOne(@Param('id') id: string) {
    return this.transactionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Обновить операцию',
    description: 'Частично обновляет данные операции.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор операции',
    example: 'cmctransaction123456',
  })
  @ApiBody({ type: UpdateTransactionDto })
  @ApiResponse({ status: 200, description: 'Операция успешно обновлена' })
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionService.update(id, updateTransactionDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Удалить операцию',
    description: 'Удаляет операцию по идентификатору.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор операции',
    example: 'cmctransaction123456',
  })
  @ApiResponse({ status: 200, description: 'Операция успешно удалена' })
  remove(@Param('id') id: string) {
    return this.transactionService.remove(id);
  }
}
