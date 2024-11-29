import { Module } from '@nestjs/common';
import { QuestionsController } from './questions/controllers/questions.controler';
import { CreateQuestionService } from './questions/services/create-question.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './questions/entities/question.entity';
import { AnswersController } from './answers/controllers/answer.controler';
import { CreateAnswerService } from './answers/services/create-answer.service';
import { Answer } from './answers/entities/answer.entity';
import { ListQuestionAnswersService } from './questions/services/list-question-answers.service';
import { UsersModule } from './users/users.module';

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
    TypeOrmModule.forFeature([Answer]),
    UsersModule,
  ],
  controllers: [QuestionsController, AnswersController],
  providers: [
    CreateQuestionService,
    CreateAnswerService,
    ListQuestionAnswersService,
  ],
})
export class AppModule {}
