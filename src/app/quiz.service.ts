import { Injectable } from '@angular/core';

interface Quiz{
    question: string;
    answer: { option: string, correct: boolean } [];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'What\'s the abbreviation for a Twin Cessna?',
      answer: [
        { option: '2CES', correct: false },
        { option: 'C172', correct: false },
        { option: 'C402', correct: true },
        { option: 'C310', correct: false },
      ]
    },
    {
      question: 'What\'s the required separation between a heavy and small aircraft?',
      answer: [
        { option: '4 Miles', correct: false },
        { option: '5 Miles', correct: false },
        { option: '6 Miles', correct: true },
        { option: 'No separation required', correct: false },
      ]
    },
    {
      question: 'What\'s the air traffic emergency frequencies (VHF/UHF)?',
      answer: [
        { option: '121.5 / 243.0', correct: true },
        { option: '291.775 / 127.25', correct: false },
        { option: '275.8 / 118.0', correct: false },
        { option: '313.8 / 127.275', correct: false }
      ]
    },
    {
      question: 'Which is a callsign for the F-22?',
      answer: [
        { option: 'Falcon', correct: false },
        { option: 'Eagle', correct: false },
        { option: 'Raptor', correct: true },
        { option: 'Viper', correct: false }
      ]
    },
    {
      question: 'What\'s the abbreviation for Dallas-Fort Worth International Airport?',
      answer: [
        { option: 'KTEX', correct: false },
        { option: 'KDFW', correct: true },
        { option: 'KDAL', correct: false },
        { option: 'KDWI', correct: false }
      ]
    },
    {
      question: 'What\'s the time standard used throughout all air traffic?',
      answer: [
        { option: 'Eastern Standard Time (EST)', correct: false },
        { option: 'Pacific Standard Time (PST)', correct: false },
        { option: 'Coordinated Universal Time (UTC)', correct: true },
        { option: 'Mountain Daylight Time (MDT)', correct: false }
      ]
    },
    {
      question: 'What\'s the weight requirement for an aircraft to be considered heavy?',
      answer: [
        { option: '250,000 lbs. or greater', correct: false },
        { option: '400,000 lbs. or greater', correct: false },
        { option: '300,000 lbs. or greater', correct: true },
        { option: '280,000 lbs. or greater', correct: false }
      ]
    },
    {
      question: 'What\'s the average daily flight handled by the FAA?',
      answer: [
        { option: '50,000', correct: false },
        { option: '48,000', correct: false },
        { option: '45,000', correct: true },
        { option: '60,000', correct: false },
      ]
    },
    {
      question: 'Which is not a controlling position?',
      answer: [
        { option: 'Ground Control', correct: false },
        { option: 'Local Control', correct: false },
        { option: 'Flight Data', correct: true },
        { option: 'Approach Control', correct: false }
      ]
    },
    {
      question: 'Which position handles air operation and is responsible for active runways?',
      answer: [
        { option: 'Watch Supervisor', correct: false },
        { option: 'Ground Control', correct: false },
        { option: 'Local Control', correct: true },
        { option: 'Coordinator', correct: false }
      ]
    }
  ]



  getQuizzes(){
    return this.quizzes;
  }
}