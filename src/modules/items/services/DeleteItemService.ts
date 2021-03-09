import { injectable, inject } from 'tsyringe';

import IItemsRepository from '../repositories/IItemsRepository';

interface IRequest {
    id: string;
}

@injectable()
class DeleteItemsService {
    constructor(
        @inject('ItemsRepository')
        private itemsRepository: IItemsRepository,
    ) {}

    public async execute({ id }: IRequest): Promise<void> {
        const item = await this.itemsRepository.findById(id);

        if (!item) {
            throw new Error();
        }

        await this.itemsRepository.remove(item);
    }
}

export default DeleteItemsService;
