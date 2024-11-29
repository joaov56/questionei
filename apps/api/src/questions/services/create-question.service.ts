import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreateQuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async execute() {
    const question = new Question();
    question.title = 'How to create a question?';
    question.description = 'I need to know how to create a question';
    question.category = 'programming';
    question.subject = 'nodejs';
    question.level = 'easy';

    return this.questionRepository.save(question);
  }
}
