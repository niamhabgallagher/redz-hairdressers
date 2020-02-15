import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeetStylistsPage } from './meet-stylists.page';

describe('MeetStylistsPage', () => {
  let component: MeetStylistsPage;
  let fixture: ComponentFixture<MeetStylistsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetStylistsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeetStylistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
