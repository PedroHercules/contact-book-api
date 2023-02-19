import { Controller } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common/decorators';
import { ContactRepository } from 'src/repositories/ContactRepository';
import { ContactDto } from './contacts.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private contactRepository: ContactRepository) {}

  @Post()
  async create(@Body() body: ContactDto) {
    await this.contactRepository.create(body);
  }

  @Get()
  async findAll() {
    const contacts = await this.contactRepository.findAll();
    return contacts;
  }
}
