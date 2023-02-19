import { ContactDto } from 'src/contacts/contacts.dto';
import { ContactProps } from 'src/types/contact';

export abstract class ContactRepository {
  abstract create(contact: ContactDto): Promise<void>;
  abstract findAll(): Promise<ContactProps[]>;
}
