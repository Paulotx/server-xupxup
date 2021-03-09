import ICreateItemDTO from '../dtos/ICreateItemDTO';
import Item from '../infra/typeorm/entities/Item';

interface IItemsRepository {
    findAllItems(): Promise<Item[]>;
    findById(id: string): Promise<Item | undefined>;
    create(data: ICreateItemDTO): Promise<Item>;
    save(item: Item): Promise<Item>;
    remove(item: Item): Promise<void>;
}

export default IItemsRepository;
