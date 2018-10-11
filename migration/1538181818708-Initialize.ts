import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'
import { DB } from '../src/types/db'

export class Initialize1538181818708 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await this.articles(queryRunner)
    await this.tags(queryRunner)
    await this.articlesTags(queryRunner)
    await this.projects(queryRunner)
  }

  articles(queryRunner: QueryRunner) {
    return queryRunner.createTable(new Table({
      name: "articles",
      columns: [
        {
          name: 'id',
          type: DB.Id,
          isPrimary: true,
          isGenerated: true,
          isNullable: false,
        },
        {
          name: 'body',
          type: DB.String,
          isNullable: false,
        },
        {
          name: 'posted_on',
          type: DB.Timestamp,
        },
        {
          name: 'is_published',
          type: DB.Boolean,
          isNullable: false,
        }
      ]
    }), true)
  }

  tags(queryRunner: QueryRunner) {
    return queryRunner.createTable(new Table({
      name: "tags",
      columns: [
        {
          name: 'id',
          type: DB.Id,
          isPrimary: true,
          isGenerated: true,
          isNullable: false,
        },
        {
          name: 'name',
          type: DB.String,
          isNullable: false,
        }
      ]
    }), true)
  }

  async articlesTags(queryRunner: QueryRunner) {
    await queryRunner.createTable(new Table({
      name: "articles_tags",
      columns: [
        {
          name: 'id',
          type: DB.Id,
          isPrimary: true,
          isGenerated: true,
          isNullable: false,
        },
        {
          name: 'article_id',
          type: DB.Id,
          isNullable: false,
        },
        {
          name: 'tag_id',
          type: DB.Id,
          isNullable: false,
        },
      ]
    }), true)

    await queryRunner.createForeignKey("articles_tags", new TableForeignKey({
      columnNames: ["article_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "articles",
      onDelete: "CASCADE"
    }))

    return queryRunner.createForeignKey("articles_tags", new TableForeignKey({
      columnNames: ["tag_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "tags",
      onDelete: "CASCADE"
    }))
  }

  projects(queryRunner: QueryRunner) {
    return queryRunner.createTable(new Table({
      name: "projects",
      columns: [
        {
          name: 'id',
          type: DB.Id,
          isPrimary: true,
          isGenerated: true,
          isNullable: false,
        },
        {
          name: 'name',
          type: DB.String,
          isNullable: false,
        },
        {
          name: 'description',
          type: DB.String,
          isNullable: false,
        },
        {
          name: 'image',
          type: DB.Bytea
        },
        {
          name: 'url',
          type: DB.String,
        },
      ]
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("projects")
    await queryRunner.dropTable("articles_tags")
    await queryRunner.dropTable("tags")
    await queryRunner.dropTable("articles")
  }
}
