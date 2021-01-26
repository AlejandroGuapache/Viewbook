import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelibroComponent } from './updatelibro.component';

describe('UpdatelibroComponent', () => {
  let component: UpdatelibroComponent;
  let fixture: ComponentFixture<UpdatelibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatelibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
