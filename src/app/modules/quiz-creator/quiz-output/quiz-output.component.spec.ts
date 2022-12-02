import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizOutputComponent } from './quiz-output.component';

describe('QuizOutputComponent', () => {
  let component: QuizOutputComponent;
  let fixture: ComponentFixture<QuizOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
