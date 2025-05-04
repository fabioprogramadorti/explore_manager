import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Turismo - API de Gestão')
    .setDescription(
      'Esta API oferece uma solução robusta para o gerenciamento de empresas do setor de turismo. ' +
        'Ela permite o cadastro e manutenção de usuários (funcionários), a organização de passeios, ' +
        'o controle de reservas e o registro de clientes.\n\n' +
        'A plataforma foi desenvolvida com **NestJS**, garantindo uma arquitetura modular, testável e escalável. ' +
        'A autenticação é realizada com **JWT (JSON Web Tokens)**, promovendo segurança e controle de acesso eficiente.\n\n' +
        'A estrutura segue as boas práticas de **APIs RESTful**, favorecendo a integração com front-ends e outros serviços. ' +
        'A documentação está baseada na especificação **OpenAPI 3.0**, facilitando o uso e entendimento por outros desenvolvedores.\n\n' +
        'Tecnologias envolvidas: **NestJS**, **JWT**, **TypeORM**, **MySQL**, **Swagger**, **REST**.',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
