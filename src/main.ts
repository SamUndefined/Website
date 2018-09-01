import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const port = process.env.port
  const app = await NestFactory.create(AppModule)
  // tslint:disable-next-line:no-console
  await app.listen(port).then(() => console.log('Listening on port ', port.toString()))
}
bootstrap()
