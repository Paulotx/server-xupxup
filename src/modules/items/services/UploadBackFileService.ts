import { injectable, inject } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProviders/models/IStorageProvider';

@injectable()
class UploadBackFileService {
    constructor(
        @inject('StorageProvider')
        private storageProvider: IStorageProvider,
    ) {}

    public async execute(backupFilename: string): Promise<void> {
        if (backupFilename) {
            await this.storageProvider.saveFile(backupFilename);
        }
    }
}

export default UploadBackFileService;
