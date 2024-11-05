import { Module } from '@nestjs/common';
import { QuestionsController } from './questions/controllers/questions.controler';
import { CreateQuestionService } from './questions/services/create-question.service';

@Module({
  imports: [],
  controllers: [QuestionsController],
  providers: [CreateQuestionService],
})
export class AppModule {}
