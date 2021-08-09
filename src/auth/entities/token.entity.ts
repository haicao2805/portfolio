import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Token {
      @ObjectIdColumn()
      _id: ObjectId;

      @Column({ nullable: false })
      data: string;
}
