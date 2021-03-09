import { injectable, inject } from 'tsyringe';

import IItemsRepository from '../repositories/IItemsRepository';

import Item from '../infra/typeorm/entities/Item';

interface IRequest {
    id: string;
    flavor: string;
    price: number;
    uri: string;
}

@injectable()
class UpdateItemService {
    constructor(
        @inject('ItemsRepository')
        private itemsRepository: IItemsRepository,
    ) {}

    public async execute({ id, flavor, price, uri }: IRequest): Promise<Item> {
        const item = await this.itemsRepository.findById(id);

        if (!item) {
            throw new Error();
        }

        item.flavor = flavor;
        item.price = price;
        item.uri = uri;

        return this.itemsRepository.save(item);
    }
}

export default UpdateItemService;
