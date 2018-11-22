import { Test, TestingModule } from '@nestjs/testing'
import { ArticleService } from './article.service'
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Article } from './article.entity';

describe('ArticleService', () => {
  let service: ArticleService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticleService,
        {
          provide: getRepositoryToken(Article),
          useValue: { find: () => [] }
        }
      ],
    }).compile()
    service = module.get<ArticleService>(ArticleService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
