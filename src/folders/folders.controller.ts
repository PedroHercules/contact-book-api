import { Body, Controller, Get, Post } from '@nestjs/common';
import { FolderRespository } from 'src/repositories/FolderRespository';
import { CreateFolderDto } from './folders.dto';

@Controller('folders')
export class FoldersController {
  constructor(private folderRepository: FolderRespository) {}
  @Post()
  async create(@Body() body: CreateFolderDto) {
    await this.folderRepository.create(body);
  }

  @Get()
  findAll() {
    const folders = this.folderRepository.findAll();
    return folders;
  }
}
