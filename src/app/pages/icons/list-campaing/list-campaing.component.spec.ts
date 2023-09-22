/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListCampaingComponent } from './list-campaing.component';

describe('ListCampaingComponent', () => {
  let component: ListCampaingComponent;
  let fixture: ComponentFixture<ListCampaingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCampaingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCampaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
