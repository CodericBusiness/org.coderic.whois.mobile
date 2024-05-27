import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HomeService, QueryInterface } from '../home.service';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import data from 'src/assets/disney.json';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('HomePage', () => {
  let component: HomePage;
  let service: HomeService;
  let fixture: ComponentFixture<HomePage>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [HomePage],
    imports: [FormsModule,
        ReactiveFormsModule,
        IonicModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();

    service = TestBed.inject(HomeService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const q: QueryInterface={
      type: 'domain',
      name: 'disney.com'
    }
    service.searchWhois(q)
    .subscribe(data => {
      console.dir(data);
      expect(data).toEqual(data);
    })
    const req = httpTestingController.expectOne('https://rdap.org/domain/disney.com');
    
    expect(req.request.method).toEqual('GET');
    req.flush(data);

    httpTestingController.verify();
  });
});
