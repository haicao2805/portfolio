import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blog {
      @PrimaryGeneratedColumn('uuid')
      id: string;

      @Column({ nullable: false })
      title: string;

      @Column({ nullable: false })
      opening: string;

      @Column({ nullable: false })
      category: string;

      @Column({ type: 'longtext' })
      content: string;

      @Column({ default: new Date().toISOString().slice(0, 19).toString().slice(0, 10) })
      date: string;

      @Column({ nullable: false })
      readTime: number;

      @Column()
      imageURL: string;
}
