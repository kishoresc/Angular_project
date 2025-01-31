import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports : [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  currentQuestionIndex: number | null = null;
  selectedAnswer: string = "";
  showResult: boolean = false;
  isCorrect: boolean | null = null;
  correctAnswer: string = "";

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.questions = this.quizService.getQuestions();
  }

  startQuiz() {
    this.showResult = false;
    this.currentQuestionIndex = Math.floor(Math.random() * this.questions.length);
    this.selectedAnswer = "";
    this.isCorrect = null;
    this.correctAnswer = "";
  }

  selectAnswer(option: string) {
    if (!this.showResult) {
      this.selectedAnswer = option;
    }
  }

  submitAnswer() {
    if (this.selectedAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex!];
      this.isCorrect = this.selectedAnswer === currentQuestion.correctAnswer;
      this.correctAnswer = currentQuestion.correctAnswer;
      this.showResult = true;
    }
  }
}
