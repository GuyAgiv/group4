import { Component, ViewChild } from '@angular/core';
import IQuestion from './question/question.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //@ViewChild('triviaForm') f : NgForm;
  questions: IQuestion[];
  isSubmitted : boolean;

  
  constructor() {

    this.isSubmitted = false;

    this.questions = [{
      questionTitle: 'When did Steve Jobs died?',
      correctAnswer: 'None of them',
      answers: ['1991', '2009', '2003', 'None of them'],
    },
    {
      questionTitle: 'Do you know me?',
      correctAnswer: 'Maybe',
      answers: ['Yes', 'No', 'Maybe', 'Enough ok?'],
    },
    {
      questionTitle: 'Who sang the song "hello"',
      correctAnswer: 'Lionel Richie',
      answers: ['Lionel Richie', 'Adele', 'Dudu Faruk', 'Rita'],
    },
    {
      questionTitle: 'How long kept the 6 Days War?',
      correctAnswer: '6',
      answers: ['10', '6', '2', '40'],
    },
    {
      questionTitle: 'Who died first in Casa de papel season 1',
      correctAnswer: 'Rio',
      answers: ['Oslo', 'Tokyo', 'Rio', 'Berlin'],
    },
    {
      questionTitle: 'Which clan in harry potter has the lion symbol?',
      correctAnswer: 'Gryffindor',
      answers: ['Hufflepuff', 'Gryffindor', 'Slytherin', 'Ravenclaw'],
    },
    {
      questionTitle: 'Angular or React?',
      correctAnswer: 'React',
      answers: ['Angular', 'React', 'Both', 'None of them'],
    },
    {
      questionTitle: 'Which programming language is the best for 2018?',
      correctAnswer: 'C#',
      answers: ['C++', 'C#', 'JS', 'C'],
    },
    {
      questionTitle: "Who is the human's best friend?",
      correctAnswer: 'Jeff',
      answers: ['Dog', 'Jeff', 'Snake', 'Cat'],
    },
    {
      questionTitle: "What is Daft Punk's preferd browser?",
      correctAnswer: 'Google Chrome',
      answers: ['Internet Explorer', 'Google Chrome', 'Safari', 'Firefox'],
    },

    ]
  }

  onSubmit(f)
  {
    console.log(f);
    //this.isSubmitted = true;

  
  }
}
