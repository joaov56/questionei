import { Controller, Get, Param } from '@nestjs/common';
import { CreateQuestionService } from '../services/create-question.service';
import { ListQuestionAnswersService } from '../services/list-question-answers.service';

@Controller('questions')
export class QuestionsController {
  constructor(
    private createQuestionService: CreateQuestionService,
    private listQuestionAnswersService: ListQuestionAnswersService,
  ) {}

  @Get()
  getQuestions() {
    return this.createQuestionService.execute();
  }

  @Get('/question/:id')
  getQuestion(@Param('id') id: string) {
    return this.listQuestionAnswersService.execute(id);
  }
}
