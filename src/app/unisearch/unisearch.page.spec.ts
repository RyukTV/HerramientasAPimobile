import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnisearchPage } from './unisearch.page';

describe('UnisearchPage', () => {
  let component: UnisearchPage;
  let fixture: ComponentFixture<UnisearchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnisearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
