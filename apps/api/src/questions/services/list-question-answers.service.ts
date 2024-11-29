import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListQuestionAnswersService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async execute(id: string) {
    console.log(id);

    return this.questionRepository.findOne({
      where: { id },
      relations: {
        answers: true,
      },
    });
  }
}
