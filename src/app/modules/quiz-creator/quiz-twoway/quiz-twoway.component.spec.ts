import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTwowayComponent } from './quiz-twoway.component';

describe('QuizTwowayComponent', () => {
  let component: QuizTwowayComponent;
  let fixture: ComponentFixture<QuizTwowayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizTwowayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTwowayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
