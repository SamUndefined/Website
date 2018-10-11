import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinTable,
    ManyToMany
} from 'typeorm'
import { Tag } from '../tag/tag.entity'

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @Column({ length: 50 })
    title: string

    @Column()
    postedOn: Date

    @ManyToMany(type => Tag, tag => tag.articles)
    @JoinTable()
    tags: Tag[];

    @Column()
    isPublished: boolean
}