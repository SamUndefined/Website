import { Controller, Get, Body, Post, Res, HttpStatus } from '@nestjs/common'
import { ArticleService } from './article.service'
import { Article } from './article.entity'

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) { }

  @Get()
  all(): Promise<Article[]> {
    return this.articleService.all()
  }

  @Post()
  createOne(@Body() createArticle, @Res() res) {
    // TODO: stuff

    return res.status(HttpStatus.CREATED).send()
  }
}
