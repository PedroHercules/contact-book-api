import { Body, Controller, Get, Post } from '@nestjs/common';
import { FolderRespository } from 'src/repositories/FolderRespository';
import { CreateFolderDto } from './folders.dto';

@Controller('folders')
export class FoldersController {
  constructor(private folderRepository: FolderRespository) {}
  @Post()
  async create(@Body() body: CreateFolderDto) {
    const { name } = body;
    const folder = await this.folderRepository.create(name);
    return folder;
  }

  @Get()
  findAll() {
    const folders = this.folderRepository.findAll();
    return folders;
  }
}
