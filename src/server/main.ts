import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { config } from 'dotenv'

async function bootstrap() {
  config()

  const port = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule)

  // tslint:disable-next-line:no-console
  await app.listen(port)
    .then(() => console.log('Listening on port', port.toString()))
    .catch(err => console.error(err))
}
bootstrap()
