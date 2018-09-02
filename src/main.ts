import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const port = process.env.PORT
  const app = await NestFactory.create(AppModule)
  // tslint:disable-next-line:no-console
  await app.listen(port)
    .then(() => console.log('Listening on port ', port.toString()))
    .catch(err => console.error(err))
}
bootstrap()
