import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from './user.userRole.enum';

@Entity()
export class User {
      @PrimaryGeneratedColumn('uuid')
      id: string;

      @Column({ default: null, unique: true })
      googleId: string;

      @Column({ default: null })
      username: string;

      @Column({ default: null, unique: true })
      email: string;

      @Column({ default: UserRole.USER.toString() })
      role: UserRole;
}
