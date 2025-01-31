import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import this
import { CommonModule } from '@angular/common';  // ✅ Import this
import { YourComponent } from './components/motivation/motivation.component';
import { ExerciseSuggestionComponent } from './components/exercise-suggestion/exercise-suggestion.component';
import { QuizComponent } from './components/health-quiz/quiz.component';
import { StretchingGuideComponent } from './components/stretching-guide/stretching-guide.component';
import { RecipeGeneratorComponent } from './components/healthy-recipegenerator/recipe-generator.component';
import { ChallengeService } from './services/challenge.service';
import { HealthGoalsService } from './services/health-goals.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChallengesComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    YourComponent,
    ExerciseSuggestionComponent ,
    QuizComponent,
    StretchingGuideComponent,
    RecipeGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgxChartsModule,
    ReactiveFormsModule, // Use this instead of FormsModule
    FormsModule 
  ],
  providers: [ChallengeService, HealthGoalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

