import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'
import { DB } from '../types/db'

const ARTICLE = 'article'
const TAG = 'tag'
const ARTICLE_TAG = 'article_tag'
const PROJECT = 'project'

export class Initialize1538181818708 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await this.article(queryRunner)
    await this.tag(queryRunner)
    await this.articleTag(queryRunner)
    await this.project(queryRunner)
  }

  article(queryRunner: QueryRunner) {
    return queryRunner.createTable(new Table({
      name: ARTICLE,
      columns: [
        {
          name: 'id',
          type: DB.Id,
          isPrimary: true,
          isGenerated: true,
          isNullable: false,
        },
        {
          name: 'title',
          type: DB.String,
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

  tag(queryRunner: QueryRunner) {
    return queryRunner.createTable(new Table({
      name: TAG,
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

  async articleTag(queryRunner: QueryRunner) {
    await queryRunner.createTable(new Table({
      name: ARTICLE_TAG,
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

    await queryRunner.createForeignKey(ARTICLE_TAG, new TableForeignKey({
      columnNames: ["article_id"],
      referencedColumnNames: ["id"],
      referencedTableName: ARTICLE,
      onDelete: "CASCADE"
    }))

    return queryRunner.createForeignKey(ARTICLE_TAG, new TableForeignKey({
      columnNames: ["tag_id"],
      referencedColumnNames: ["id"],
      referencedTableName: TAG,
      onDelete: "CASCADE"
    }))
  }

  project(queryRunner: QueryRunner) {
    return queryRunner.createTable(new Table({
      name: PROJECT,
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
    await queryRunner.dropTable(PROJECT)
    await queryRunner.dropTable(ARTICLE_TAG)
    await queryRunner.dropTable(TAG)
    await queryRunner.dropTable(ARTICLE)
  }
}
