import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseServiceComponent } from './firebase-service.component';

describe('FirebaseServiceComponent', () => {
  let component: FirebaseServiceComponent;
  let fixture: ComponentFixture<FirebaseServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirebaseServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirebaseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
