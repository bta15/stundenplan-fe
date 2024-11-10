import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController,} from "@angular/common/http/testing";
import {SchuleService} from "./schule.service";
import {Schule} from "../model/schule";

describe("SchuleService-Test", () => {
  let schuleService: SchuleService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SchuleService],
    });

    schuleService = TestBed.inject(SchuleService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it("service should have created successfully", () => {
    expect(schuleService).toBeTruthy();
  });

  it("Should retrieve all Schulen", () => {
    schuleService.getAllSchulen().subscribe(schulen => {
      expect(schulen).toBeTruthy();
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

  //TODO Test für Fehlerfall implementieren

});
