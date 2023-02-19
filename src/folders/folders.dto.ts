import { IsNotEmpty } from 'class-validator';

export class CreateFolderDto {
  @IsNotEmpty({
    message: 'Name is required',
  })
  name: string;
}
