import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-categories.dto';
import { UpdateCategoryDto } from './dto/update-categories.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: {
        name: createCategoryDto.name,
        type: createCategoryDto.type,
        iconName: createCategoryDto.iconName,
        colorHex: createCategoryDto.colorHex,
        displayOrder: createCategoryDto.displayOrder,
      },
    });
  }

  findAll() {
    return this.prisma.category.findMany({
      orderBy: [{ type: 'asc' }, { displayOrder: 'asc' }],
    });
  }

  findOne(id: string) {
    return this.prisma.category.findUnique({
      where: { id },
      include: {
        transactions: true,
        userCategorySetting: true,
      },
    });
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: {
        ...(updateCategoryDto.name !== undefined && {
          name: updateCategoryDto.name,
        }),
        ...(updateCategoryDto.type !== undefined && {
          type: updateCategoryDto.type,
        }),
        ...(updateCategoryDto.iconName !== undefined && {
          iconName: updateCategoryDto.iconName,
        }),
        ...(updateCategoryDto.colorHex !== undefined && {
          colorHex: updateCategoryDto.colorHex,
        }),
        ...(updateCategoryDto.displayOrder !== undefined && {
          displayOrder: updateCategoryDto.displayOrder,
        }),
      },
    });
  }

  remove(id: string) {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
