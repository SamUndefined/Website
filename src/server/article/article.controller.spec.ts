import 'jest'
import { Test, TestingModule } from '@nestjs/testing'
import { ArticleController } from './article.controller'
import { ArticleService } from './article.service'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Article } from './article.entity'

describe('Article Controller', () => {
  let module: TestingModule

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [
        ArticleService,
        {
          provide: getRepositoryToken(Article),
          useValue: { find: () => [] }
        },
      ]
    }).compile()
  })

  it('should be defined', () => {
    const controller = module.get(ArticleController)
    expect(controller).toBeDefined()
  })

  describe('get /article', () => {
    it('should return an array of Articles', () => {
      const controller = module.get(ArticleController)
      expect(controller.all()).toBeInstanceOf(Array)
    })
  })
})
