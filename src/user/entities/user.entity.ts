import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
      @PrimaryGeneratedColumn('uuid')
      id: string;

      @Column()
      googleId: string;

      @Column()
      username: string;

      @Column()
      email: string;
}
