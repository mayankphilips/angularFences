import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { OutputprogressComponent } from './outputprogress/outputprogress.component';
import { ProgressreportComponent } from './progressreport/progressreport.component';


const routes: Routes = [
  { path: 'projectlist', component: ProjectListComponent },
  { path: 'outputprogress', component: OutputprogressComponent},
  { path: 'progressreport', component: ProgressreportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
