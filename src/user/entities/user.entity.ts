import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { UserRole } from './user.userRole.enum';

@Entity()
export class User {
      @ObjectIdColumn()
      _id: ObjectId;

      @Column({ default: null, unique: true })
      googleId: string;

      @Column({ default: null })
      username: string;

      @Column({ default: null, unique: true })
      email: string;

      @Column({ default: UserRole.USER.toString() })
      role: UserRole;
}
