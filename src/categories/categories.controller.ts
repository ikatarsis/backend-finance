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
import { CreateCategoryDto } from './dto/create-categories.dto';
import { CategoryService } from './categories.service';
import { UpdateCategoryDto } from './dto/update-categories.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({
    summary: 'Создать категорию',
    description: 'Создает новую категорию операций.',
  })
  @ApiBody({ type: CreateCategoryDto })
  @ApiResponse({ status: 201, description: 'Категория успешно создана' })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Получить список категорий',
    description: 'Возвращает список всех категорий.',
  })
  @ApiResponse({ status: 200, description: 'Список категорий успешно получен' })
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Получить категорию по id',
    description: 'Возвращает одну категорию по идентификатору.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор категории',
    example: 'cmccategory123456',
  })
  @ApiResponse({ status: 200, description: 'Категория успешно найдена' })
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Обновить категорию',
    description: 'Частично обновляет данные категории.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор категории',
    example: 'cmccategory123456',
  })
  @ApiBody({ type: UpdateCategoryDto })
  @ApiResponse({ status: 200, description: 'Категория успешно обновлена' })
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Удалить категорию',
    description: 'Удаляет категорию по идентификатору.',
  })
  @ApiParam({
    name: 'id',
    description: 'Идентификатор категории',
    example: 'cmccategory123456',
  })
  @ApiResponse({ status: 200, description: 'Категория успешно удалена' })
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
