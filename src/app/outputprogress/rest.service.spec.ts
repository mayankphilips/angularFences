import { TestBed, async, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Project } from '../sources/project';
import { RestService } from '../rest.service';

const dummyProjectList: Project[] = [
    {
        name: 'git-link-master',
        projectCreationDate: new Date(Date.parse('2005-07-08T00:00:00Z')),
        lastBuildDate: new Date(Date.parse('2005-07-08T00:00:00Z')),
    }];

describe('RestService', () => {
    let service: RestService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule(
            {
                imports: [HttpClientTestingModule],
                providers: [RestService]
            }
        );

        service = TestBed.get(RestService);

        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should receive beds via GET method', () => {
        service.getProjectList().subscribe(projects => {
            expect(projects).toEqual(dummyProjectList);
        });
        // make a dummy request using httpMock
        const request = httpMock.expectOne('http://localhost:8080/fences/api/project');
        expect(request.request.method).toBe('GET');
        request.flush(dummyProjectList);

    });
});
