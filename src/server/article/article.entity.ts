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
    body: string

    @Column({ length: 50 })
    title: string

    @Column({ name: 'posted_on'})
    postedOn: Date

    @ManyToMany(type => Tag, tag => tag.articles)
    @JoinTable()
    tags: Tag[];

    @Column({ name: 'is_published'})
    isPublished: boolean
}