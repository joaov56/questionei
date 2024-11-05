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
    return this.questionRepository.save({
      title: 'How to create a question?',
      description: 'I need to know how to create a question',
      category: 'programming',
      subject: 'nodejs',
      level: 'easy',
    });
  }
}
