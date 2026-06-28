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
import { GoalsService } from './goals.service';
import { CreateGoalDto } from './dto/create-goals.dto';
import { UpdateGoalDto } from './dto/update-goals.dto';

@ApiTags('Goals')
@Controller('goals')
export class GoalsController {
  constructor(private readonly goalService: GoalsService) {}

  @Post()
  @ApiOperation({
    summary: 'Создать цель',
    description: 'Создает новую финансовую цель пользователя.',
  })
  @ApiBody({ type: CreateGoalDto })
  @ApiResponse({ status: 201, description: 'Цель успешно создана' })
  create(@Body() createGoalDto: CreateGoalDto) {
    return this.goalService.create(createGoalDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Получить список целей',
    description: 'Возвращает список всех целей.',
  })
  @ApiResponse({ status: 200, description: 'Список целей успешно получен' })
  findAll() {
    return this.goalService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Получить цель по id',
    description: 'Возвращает одну цель по идентификатору.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор цели',
    example: 'cmcgoal123456',
  })
  @ApiResponse({ status: 200, description: 'Цель успешно найдена' })
  findOne(@Param('id') id: string) {
    return this.goalService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Обновить цель',
    description: 'Частично обновляет данные цели.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор цели',
    example: 'cmcgoal123456',
  })
  @ApiBody({ type: UpdateGoalDto })
  @ApiResponse({ status: 200, description: 'Цель успешно обновлена' })
  update(@Param('id') id: string, @Body() updateGoalDto: UpdateGoalDto) {
    return this.goalService.update(id, updateGoalDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Удалить цель',
    description: 'Удаляет цель по идентификатору.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор цели',
    example: 'cmcgoal123456',
  })
  @ApiResponse({ status: 200, description: 'Цель успешно удалена' })
  remove(@Param('id') id: string) {
    return this.goalService.remove(id);
  }
}
