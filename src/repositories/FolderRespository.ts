import { FolderProps } from 'src/types/folder';

export abstract class FolderRespository {
  abstract create(name: string): Promise<void>;
  abstract findAll(): Promise<FolderProps[]>;
}
