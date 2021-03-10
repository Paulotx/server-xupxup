import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UploadBackFileService from '@modules/items/services/UploadBackFileService';

export default class BackupController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { file } = request;

        let filename = '';

        if (file) {
            filename = file.filename;
        }

        const uploadBackFile = container.resolve(UploadBackFileService);

        await uploadBackFile.execute(filename);

        return response.status(204).json();
    }
}
