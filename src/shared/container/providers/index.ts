import { container } from 'tsyringe';

import IStorageProviders from './StorageProviders/models/IStorageProvider';
import DiskStorageProvider from './StorageProviders/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProviders>(
    'StorageProvider',
    DiskStorageProvider,
);
