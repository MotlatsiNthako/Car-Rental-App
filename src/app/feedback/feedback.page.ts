/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface FeedbackData {
  Feedback: string;

}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  feedbackList = [];
  feedbackData: FeedbackData;
  feedbackForm: FormGroup;

  constructor(private feedbackService: FeedbackService,
    public fb: FormBuilder) {
      this.feedbackData = {} as FeedbackData;

  }

  ngOnInit() {
    this.feedbackForm = this.fb.group({
      Feedback: ['', [Validators.required]]
  });
  this.feedbackService.readFeedback().subscribe(data => {

    this.feedbackList = data.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        Feedback: e.payload.doc.data()['Feedback'],
      };
    });
    console.log(this.feedbackList);

  });
  }
  CreateFeedback() {
    console.log(this.feedbackForm.value);
    this.feedbackService.createFeedback(this.feedbackForm.value).then(resp => {
      this.feedbackForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

}
