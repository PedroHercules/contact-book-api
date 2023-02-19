import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateFolderDto } from 'src/folders/folders.dto';
import { FolderProps } from 'src/types/folder';
import { v4 as uuidv4 } from 'uuid';
import { FolderRespository } from '../FolderRespository';

@Injectable()
export class PrismaFolderRepository implements FolderRespository {
  constructor(private prisma: PrismaService) {}

  async create({ name }: CreateFolderDto): Promise<void> {
    await this.prisma.folder.create({
      data: {
        id: uuidv4(),
        name,
      },
    });
  }

  async findAll(): Promise<FolderProps[]> {
    const folders = await this.prisma.folder.findMany({
      include: {
        contacts: true,
      },
    });
    return folders;
  }
}
