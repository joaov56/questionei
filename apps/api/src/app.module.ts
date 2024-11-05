import { Module } from '@nestjs/common';
import { QuestionsController } from './questions/controllers/questions.controler';
import { CreateQuestionService } from './questions/services/create-question.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './questions/entities/question.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    TypeOrmModule.forFeature([Question]),
  ],
  controllers: [QuestionsController],
  providers: [CreateQuestionService],
})
export class AppModule {}
