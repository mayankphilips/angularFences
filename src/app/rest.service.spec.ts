import { TestBed, async, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Project } from './sources/project';
import { RestService } from './rest.service';
import { ValueTransformer } from '@angular/compiler/src/util';



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

    it('should receive projects via GET method', () => {
        const dummyProjectList: Project[] = [
        {
        name: 'git-link-master',
        projectCreationDate: new Date(Date.parse('2005-07-08T00:00:00Z')),
        lastBuildDate: new Date(Date.parse('2005-07-08T00:00:00Z')),
        },
        {
            name: 'alertingmaster',
            projectCreationDate: new Date(Date.parse('2005-07-08T00:00:00Z')),
            lastBuildDate: new Date(Date.parse('2005-07-08T00:00:00Z')),
            }];
        service.getProjectList().subscribe(projects => {
            expect(projects).toEqual(dummyProjectList);
        });
        // make a dummy request using httpMock
        const request = httpMock.expectOne('http://localhost:8080/fences/api/project');
        expect(request.request.method).toBe('GET');
        request.flush(dummyProjectList);

    });

    it('Should receive successfull message on post request', () => {
        const mockSettings = {
            checkstyle: {},
            pmd: {}
        };
        const mockProject = {
            link: 'https://github.com/Amine-Smahi/BlogCity.git',
            branch: 'master',
            settings: mockSettings
        };

        const message = 'Project created';

        service.getInputs(mockProject).subscribe(projectData => {
            expect(message).toEqual(message);
        });

        const request = httpMock.expectOne('http://localhost:8080/fences/api/project');
        expect(request.request.method).toBe('POST');
        request.flush(mockProject);
    });

    it('Should receive fence pass report of the selected project on GET Method', () => {
        const checkStyleReport = {
           errorsThen: '10',
           errorsNow: '0',
           percentageChange: '10',
        };

        const pmdReport = {
            errorsThen: '20',
            errorsNow: '0',
            percentageChange: '5',
         };
        const mockReport = {
            checkstyle: 'CheckStyleReport',
            pmd: 'pmdReport'
        };
        const mockFenceReport = {
            status: 'pass',
            report: mockReport
        };

        service.getFenceReport('git-link-master').subscribe(reportData => {
          expect(reportData).toEqual(mockFenceReport);
        });
        const request = httpMock.expectOne('http://localhost:8080/fences/api/project/git-link-master/fence');
        expect(request.request.method).toBe('GET');
        request.flush(mockFenceReport);
    });

    it('should receive the tools via the get method ', () => {
        const styleguidevalues = {
            values:
            ['sun_checks',
            'google_checks',
        ],
            default: 'google_checks'
        };

        const testfilesvalues = {
            values:
            [
                'yes',
                'no',
            ],
            default: 'no'
        };
        const checkstyleparams = {
            styleguide: styleguidevalues,
            excludeTestFiles: testfilesvalues,

        };
        const checkstyle = {
            toolname: 'checkstyle',
            description: 'checkstyle description',
            parameters: checkstyleparams
        };

        const rulesetvalues = {
            values:  'rulesets/java/quickstart.xml',
            default: 'rulesets/java/quickstart.xml'
        };
        const pmdparams = {
            ruleset: rulesetvalues
        };
        const mocktools = {
            CHECKSTYLE: checkstyle,
             PMD: pmdparams
            };

        service.getTools().subscribe(reportData => {
                expect(reportData).toEqual(mocktools);
              });
        const request = httpMock.expectOne('http://localhost:8080/fences/api/project/tool');
        expect(request.request.method).toBe('GET');
        request.flush(mocktools);
    });

    //  it('get report for the desired tool against a raw code', () => {
    //      const report_of_raw_code = {
    //        file:
    //         {
    //             line: '1',
    //             priority: '3',
    //             message: '\nAll classes, interfaces, enums and annotations must belong to a named package\n'
    //         },
    //     };
    //     const report_metrics = {
    //         errors: 3
    //     };
    //     const mockreport_of_raw_code = {
    //     report: '',
    //     metrics: report_metrics,
    //     error: 'none'
    //     };

    //     service.getRawInput('harshitha', 'checktyle').subscribe(reportData => {
    //         expect(reportData).toEqual(mockreport_of_raw_code);
    //       });
    //       const request = httpMock.expectOne('http://localhost:8080/fences/api/'+'checkstyle'+'/'+'harshitha');
    //       expect(request.request.method).toBe('POST');
    //       request.flush(mockreport_of_raw_code);

    // });

    it('delete project via the delete method', () =>  {
        service.deleteProject('git-link-master').subscribe(reportData => {
            expect(reportData).toEqual(true);
          });
        const request = httpMock.expectOne('http://localhost:8080/fences/api/project/git-link-master');
        expect(request.request.method).toBe('DELETE');
    });
});
