import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('items')
class Item {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    flavor: string;

    @Column('float')
    price: number;

    @Column('int')
    quantity: number;

    @Column()
    uri: string;
}

export default Item;
