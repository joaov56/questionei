import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateQuestionService {
  async execute() {
    return 'Create question';
  }
}
