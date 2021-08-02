import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Token {
      @PrimaryGeneratedColumn('uuid')
      id: string;

      @Column({ nullable: false })
      data: string;
}
