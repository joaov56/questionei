import { Controller, Post, Body } from '@nestjs/common';
import { CreateAnswerService } from '../services/create-answer.service';
import { Answer as AnswerInterface } from '../entities/answer.entity';

@Controller('answers')
export class AnswersController {
  constructor(private readonly createAnswerService: CreateAnswerService) {}

  @Post()
  async create(@Body() answerData: Partial<AnswerInterface>) {
    return this.createAnswerService.createAnswer(answerData);
  }
}
