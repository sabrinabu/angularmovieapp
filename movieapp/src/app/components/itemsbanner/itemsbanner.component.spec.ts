import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsbannerComponent } from './itemsbanner.component';

describe('ItemsbannerComponent', () => {
  let component: ItemsbannerComponent;
  let fixture: ComponentFixture<ItemsbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
