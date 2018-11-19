import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Article } from "../article/article.entity";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(type => Article, article => article.tags)
  @JoinTable()
  articles: Article[];
}