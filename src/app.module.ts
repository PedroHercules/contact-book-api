import { Module } from '@nestjs/common';
import { FoldersController } from './folders/folders.controller';
import { PrismaService } from './database/prisma.service';
import { FolderRespository } from './repositories/FolderRespository';
import { PrismaFolderRepository } from './repositories/prisma/PrismaFolderRepository';

@Module({
  imports: [],
  controllers: [FoldersController],
  providers: [
    PrismaService,
    {
      provide: FolderRespository,
      useClass: PrismaFolderRepository,
    },
  ],
})
export class AppModule {}
