import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'] 
})
export class QuizComponent {
  @Input() questions: any[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  showResult: boolean = false;
  selectedAnswerIndex: number | null = null; 
  hasAnswered: boolean = false; 

  constructor() { }

  selectAnswer(isCorrect: boolean, index: number) {
    
    if (!this.hasAnswered) {
      this.selectedAnswerIndex = index;
      this.hasAnswered = true; 
      if (isCorrect) {
        this.score++;
      }
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedAnswerIndex = null;
      this.hasAnswered = false;
    } else {
      this.showResult = true;
    }
  }

  restartQuiz() {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.showResult = false;
    this.selectedAnswerIndex = null;
    this.hasAnswered = false;
  }
}
