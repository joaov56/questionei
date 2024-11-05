import { Controller, Get } from '@nestjs/common';
import { CreateQuestionService } from '../services/create-question.service';

@Controller('questions')
export class QuestionsController {
  constructor(private createQuestionService: CreateQuestionService) {}

  @Get()
  getQuestions() {
    return '';
  }
}
