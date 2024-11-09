import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController,} from "@angular/common/http/testing";
import {SchuleService} from "./schule.service";
import {Schule} from "../model/schule";

describe("SchuleService-Test", () => {
  let coursesService: SchuleService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SchuleService],
    });

    coursesService = TestBed.inject(SchuleService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it("service should have created successfully", () => {
    expect(coursesService).toBeTruthy();
  });

  it("Should retrieve all Schulen function", () => {
    coursesService.getAllSchulen().subscribe(schulen => {
      expect(schulen).toBeTruthy('No schulen return');
      expect(schulen.length).toEqual(1);
    });
    const apiReq = httpTestingController.expectOne('http://localhost:8082/schule');
    expect(apiReq.cancelled).toBeFalsy();
    expect(apiReq.request.method).toBe("GET");
    expect(apiReq.request.responseType).toBe('json');
    const schulen: Schule[] = [
      {schulname: "Schule 123"} as Schule
    ]
    apiReq.flush(schulen);
  });

});
