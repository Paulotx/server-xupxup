import { getRepository, Repository } from 'typeorm';

import Item from '@modules/items/infra/typeorm/entities/Item';
import IItemsRepository from '@modules/items/repositories/IItemsRepository';
import ICreateItemDTO from '@modules/items/dtos/ICreateItemDTO';

class ItemsRepository implements IItemsRepository {
    private ormRepository: Repository<Item>;

    constructor() {
        this.ormRepository = getRepository(Item);
    }

    public async findAllItems(): Promise<Item[]> {
        const findItems = await this.ormRepository.find();

        return findItems;
    }

    public async findById(id: string): Promise<Item | undefined> {
        const findItem = await this.ormRepository.findOne(id);

        return findItem;
    }

    public async create({ flavor, price, uri }: ICreateItemDTO): Promise<Item> {
        const newItem = this.ormRepository.create({ flavor, price, uri });

        await this.ormRepository.save(newItem);

        return newItem;
    }

    public async save(item: Item): Promise<Item> {
        return this.ormRepository.save(item);
    }

    public async remove(item: Item): Promise<void> {
        await this.ormRepository.remove(item);
    }
}

export default ItemsRepository;
