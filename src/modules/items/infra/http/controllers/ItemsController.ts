import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateItemService from '@modules/items/services/CreateItemService';
import ListItemsService from '@modules/items/services/ListItemsService';
import ShowItemService from '@modules/items/services/ShowItemService';
import UpdateItemService from '@modules/items/services/UpdateItemService';
import DeleteItemService from '@modules/items/services/DeleteItemService';

export default class TypesRoomController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const listItems = container.resolve(ListItemsService);

        const items = await listItems.execute();

        return response.status(200).json(items);
    }

    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { flavor, price, uri } = request.body;

        const CreateItem = container.resolve(CreateItemService);

        const item = await CreateItem.execute({
            flavor,
            price: Number(price),
            uri,
        });

        return response.status(201).json(item);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const showItem = container.resolve(ShowItemService);

        const item = await showItem.execute(id);

        return response.status(200).json(item);
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;
        const { flavor, price, uri } = request.body;

        const updateItem = container.resolve(UpdateItemService);

        const item = await updateItem.execute({
            id,
            flavor,
            price,
            uri,
        });

        return response.json(item);
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;

        const deleteItem = container.resolve(DeleteItemService);

        await deleteItem.execute({ id });

        return response.status(204).json();
    }
}
