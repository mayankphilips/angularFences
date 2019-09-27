import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { OutputprogressComponent } from './outputprogress/outputprogress.component';
import { ProgressreportComponent } from './progressreport/progressreport.component';
import { FencesHomeComponent } from './fences-home/fences-home.component';
import { RawCodeAnalysisComponent } from './raw-code-analysis/raw-code-analysis.component';


const routes: Routes = [
  {path: '', component: FencesHomeComponent},
  { path: 'projectlist', component: ProjectListComponent },
  { path: 'outputprogress', component: OutputprogressComponent},
  { path: 'progressreport', component: ProgressreportComponent},
  {path: 'rawcodeanalysis', component: RawCodeAnalysisComponent},
  {path: '**', component: FencesHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
