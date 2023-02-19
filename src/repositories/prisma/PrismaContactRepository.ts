import { Injectable } from '@nestjs/common';
import { ContactDto } from 'src/contacts/contacts.dto';
import { PrismaService } from 'src/database/prisma.service';
import { ContactProps } from 'src/types/contact';
import { v4 as uuidV4 } from 'uuid';
import { ContactRepository } from '../ContactRepository';

@Injectable()
export class PrismaContactRepository implements ContactRepository {
  constructor(private prisma: PrismaService) {}

  async create({ name, email, phone, folderId }: ContactDto): Promise<void> {
    await this.prisma.contact.create({
      data: {
        id: uuidV4(),
        name,
        email,
        phone,
        folderId,
      },
    });

    await this.prisma.folder.update({
      where: {
        id: folderId,
      },
      data: {
        qtdContacts: {
          increment: 1,
        },
      },
    });
  }

  async findAll(): Promise<ContactProps[]> {
    const contacts = await this.prisma.contact.findMany();
    return contacts;
  }
}
