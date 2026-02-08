import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Lead {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ type: 'varchar', length: 20 })
phone: string;


  @Column({ nullable: true })
  message: string;

  @Column({ nullable: true })
  service: string;

  @Column({ nullable: true })
  company: string;

  @CreateDateColumn()
  createdAt: Date;
}
