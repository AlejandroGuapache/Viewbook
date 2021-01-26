import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAutoresComponent } from './list-autores.component';

describe('ListAutoresComponent', () => {
  let component: ListAutoresComponent;
  let fixture: ComponentFixture<ListAutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAutoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
