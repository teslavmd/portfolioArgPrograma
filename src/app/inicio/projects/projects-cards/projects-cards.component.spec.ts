import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCardsComponent } from './projects-cards.component';

describe('ProjectsCardsComponent', () => {
  let component: ProjectsCardsComponent;
  let fixture: ComponentFixture<ProjectsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
