import { CreateFolderDto } from 'src/folders/folders.dto';
import { FolderProps } from 'src/types/folder';

export abstract class FolderRespository {
  abstract create(folder: CreateFolderDto): Promise<void>;
  abstract findAll(): Promise<FolderProps[]>;
}
