import { ICreateObjectDTO } from '../dtos/ICreateObjectDTO';
import { IObject } from '../models/IObject';

interface IObjectsRepository {
  create(data: ICreateObjectDTO): Promise<IObject>;
  findAll(): Promise<IObject[]>;
  findAvaliable(name?: string, category_id?: string): Promise<IObject[]>;
  findById(id: string): Promise<IObject | undefined>;
  updateAvailable(id: string, available: boolean): Promise<void>;
}

export { IObjectsRepository };
