import path from 'path';
import crypto from 'crypto';

import multer from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');
const date = new Date();

export default {
    tmpFolder,
    uploadsFolder: path.resolve(tmpFolder, 'uploads'),

    storage: multer.diskStorage({
        destination: tmpFolder,

        filename(request, file, callback) {
            const fileHash = crypto.randomBytes(2).toString('hex');
            const fileName = `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${fileHash}-${
                file.originalname
            }`;

            return callback(null, fileName);
        },
    }),
};
