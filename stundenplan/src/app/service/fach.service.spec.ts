import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController,} from "@angular/common/http/testing";
import {FachService} from "./fach.service";
import {Fach} from "../model/fach";

describe("FachService-Test", () => {
  let fachService: FachService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FachService],
    });

    fachService = TestBed.inject(FachService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it("service should have created successfully", () => {
    expect(fachService).toBeTruthy();
  });

  it("Should retrieve all Fächer", () => {
    fachService.getFachList().subscribe(fachList => {
      expect(fachList).toBeTruthy();
      expect(fachList.length).toEqual(1);
    });
    const apiReq = httpTestingController.expectOne('http://localhost:8082/fach');
    expect(apiReq.cancelled).toBeFalsy();
    expect(apiReq.request.method).toBe("GET");
    expect(apiReq.request.responseType).toBe('json');
    const fachList: Fach[] = [
      {bezeichnung: "Deutsch"} as Fach
    ]
    apiReq.flush(fachList);
  });

  //TODO Test für Fehlerfall implementieren

});
