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
import { User } from './users/entities/user.entity';
import { CreateUserService } from './users/services/create-user.service';
import { UsersController } from './users/controllers/users.controller';

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
    TypeOrmModule.forFeature([Question, Answer, User]),
  ],
  controllers: [QuestionsController, AnswersController, UsersController],
  providers: [
    CreateQuestionService,
    CreateAnswerService,
    ListQuestionAnswersService,
    CreateUserService,
  ],
})
export class AppModule {}
