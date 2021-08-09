import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blog {
      @ObjectIdColumn()
      _id: ObjectId;

      @Column({ nullable: false })
      title: string;

      @Column({ nullable: false })
      opening: string;

      @Column({ nullable: false })
      category: string;

      // maximum 102236 characters
      @Column({ type: 'longtext' })
      content: string;

      @Column({ default: new Date().toISOString().slice(0, 19).toString().slice(0, 10) })
      date: string;

      @Column({ nullable: false })
      readTime: number;

      @Column()
      imageURL: string;
}
