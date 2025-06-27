import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularQRcodeComponent } from './angular-qrcode.component';

describe('AngularQRcodeComponent', () => {
  let component: AngularQRcodeComponent;
  let fixture: ComponentFixture<AngularQRcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularQRcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularQRcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
