import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Column, Entity, ObjectIdColumn, ObjectID } from 'typeorm';

export abstract class AbstractEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column({ nullable: true })
    createdAt: Date;

    @Column({ nullable: true })
    updatedAt: Date;

    @Column({ nullable: true })
    createdBy: string

    @Column({ nullable: true })
    updatedBy: string

    @Column({ nullable: true })
    isActive: number

    @Column({ nullable: true })
    isDeleted: number
}
