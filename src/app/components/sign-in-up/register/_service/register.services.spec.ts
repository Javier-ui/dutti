import { inject, TestBed } from '@angular/core/testing';
import { RegisterService } from './register.service';


describe('RegisterService', () => {
  let service: RegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [RegisterService]
    });

    service = TestBed.inject(RegisterService);
  });

  it('RegisterService service should be created', inject([RegisterService], () => {
    expect(service).toBeTruthy();
  }));

});
