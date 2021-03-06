import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateItems1615226794368 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'items',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'flavor',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'price',
                        type: 'float',
                        isNullable: false,
                    },
                    {
                        name: 'quantity',
                        type: 'integer',
                        isNullable: false,
                        default: 0,
                    },
                    {
                        name: 'uri',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'watermelon_id',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('items');
    }
}
