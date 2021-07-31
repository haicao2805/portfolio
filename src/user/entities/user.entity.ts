import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
      @ObjectIdColumn()
      _id: string;

      @Column()
      googleId: string;

      @Column()
      username: string;

      @Column()
      email: string;
}
