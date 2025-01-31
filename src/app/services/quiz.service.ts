import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions = [
    {
      question: "Which vitamin is known as the sunshine vitamin?",
      options: ["Vitamin A", "Vitamin C", "Vitamin D"],
      correctAnswer: "Vitamin D"
    },
    {
      question: "What is the best time to exercise?",
      options: ["Morning", "Afternoon", "Evening"],
      correctAnswer: "Morning"
    },
    {
      question: "How much water should an adult drink daily?",
      options: ["1 liter", "2 liters", "5 liters"],
      correctAnswer: "2 liters"
    },
    {
      question: "How many hours of sleep does an adult need per night?",
      options: ["4-5 hours", "6-8 hours", "9-10 hours"],
      correctAnswer: "6-8 hours"
    },
    {
      question: "What is the recommended daily intake of fiber for an adult?",
      options: ["10g", "25-30g", "50g"],
      correctAnswer: "25-30g"
    },
    {
      question: "Which nutrient is essential for strong bones?",
      options: ["Vitamin C", "Calcium", "Iron"],
      correctAnswer: "Calcium"
    },
    {
      question: "What is the normal resting heart rate for an adult?",
      options: ["40-60 bpm", "60-100 bpm", "100-120 bpm"],
      correctAnswer: "60-100 bpm"
    },
    {
      question: "Which food is the best source of omega-3 fatty acids?",
      options: ["Chicken", "Salmon", "Rice"],
      correctAnswer: "Salmon"
    },
    {
      question: "What is the best way to stay hydrated?",
      options: ["Drink coffee", "Drink water regularly", "Eat spicy food"],
      correctAnswer: "Drink water regularly"
    },
    {
      question: "Which type of fat is considered healthy?",
      options: ["Trans fat", "Saturated fat", "Unsaturated fat"],
      correctAnswer: "Unsaturated fat"
    },
    {
      question: "What is the primary function of red blood cells?",
      options: ["Carry oxygen", "Fight infections", "Digest food"],
      correctAnswer: "Carry oxygen"
    },
    {
      question: "Which organ is responsible for detoxifying the blood?",
      options: ["Liver", "Heart", "Kidneys"],
      correctAnswer: "Liver"
    },
    {
      question: "What is the most important meal of the day?",
      options: ["Breakfast", "Lunch", "Dinner"],
      correctAnswer: "Breakfast"
    },
    {
      question: "What is a common symptom of dehydration?",
      options: ["Hunger", "Dizziness", "Increased energy"],
      correctAnswer: "Dizziness"
    },
    {
      question: "Which vitamin is crucial for eye health?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin D"],
      correctAnswer: "Vitamin A"
    },
    {
      question: "What type of exercise is best for heart health?",
      options: ["Weightlifting", "Cardio", "Stretching"],
      correctAnswer: "Cardio"
    },
    {
      question: "What is the main cause of Type 2 Diabetes?",
      options: ["Lack of sleep", "Poor diet and lack of exercise", "Drinking too much water"],
      correctAnswer: "Poor diet and lack of exercise"
    },
    {
      question: "Which food is high in protein?",
      options: ["Bread", "Eggs", "Lettuce"],
      correctAnswer: "Eggs"
    }
  ];

  constructor() {}

  getQuestions() {
    return this.questions;
  }
}
