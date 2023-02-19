import { Module } from '@nestjs/common';
import { FoldersController } from './folders/folders.controller';
import { PrismaService } from './database/prisma.service';
import { FolderRespository } from './repositories/FolderRespository';
import { PrismaFolderRepository } from './repositories/prisma/PrismaFolderRepository';
import { ContactsController } from './contacts/contacts.controller';
import { ContactRepository } from './repositories/ContactRepository';
import { PrismaContactRepository } from './repositories/prisma/PrismaContactRepository';

@Module({
  imports: [],
  controllers: [FoldersController, ContactsController],
  providers: [
    PrismaService,
    {
      provide: FolderRespository,
      useClass: PrismaFolderRepository,
    },
    {
      provide: ContactRepository,
      useClass: PrismaContactRepository,
    },
  ],
})
export class AppModule {}
