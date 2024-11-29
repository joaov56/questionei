// src/answers/services/create-answer.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from '../entities/answer.entity';
import { Repository } from 'typeorm';
import { Answer as AnswerInterface } from '../interfaces/answer.interface';

@Injectable()
export class CreateAnswerService {
  constructor(
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
  ) {}

  async createAnswer(answerData: Partial<AnswerInterface>): Promise<Answer> {
    const answer = new Answer();

    answer.answer = answerData.answer;
    answer.questionId = answerData.questionId;

    return this.answerRepository.save(answer);
  }
}
