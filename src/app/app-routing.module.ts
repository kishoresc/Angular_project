import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BmiCalculatorComponent } from './components/bmi-calculator/bmi-calculator.component';
import { YourComponent } from './components/motivation/motivation.component';
import { ExerciseSuggestionComponent } from './components/exercise-suggestion/exercise-suggestion.component';
import { QuizComponent } from './components/health-quiz/quiz.component';
import { StretchingGuideComponent } from './components/stretching-guide/stretching-guide.component';
import { RecipeGeneratorComponent } from './components/healthy-recipegenerator/recipe-generator.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }, 
  { path: 'motivation', component: YourComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'bmi-calculator', component: BmiCalculatorComponent },
  { path: '', redirectTo: '/exercise-suggestion', pathMatch: 'full' },
  { path: 'exercise', component: ExerciseSuggestionComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'stretch', component: StretchingGuideComponent },
  { path: 'recipe', component: RecipeGeneratorComponent },
  { path: '', redirectTo: '/bmi-calculator', pathMatch: 'full' },
  { path: '', redirectTo: '/progress', pathMatch: 'full' },
  { path: '**', redirectTo: '/' } // Redirect to home for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
