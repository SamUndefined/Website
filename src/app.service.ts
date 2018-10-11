import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm';
import { Article } from 'article/article.entity'

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!'
  }
}
