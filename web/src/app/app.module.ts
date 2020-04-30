
import { CreateInterviewComponent } from './create-interview/create-interview.component';
import { JdFormComponent } from './jd-form/jd-form.component';
import { HrInterviewAssessementComponent } from './hr-interview-assessement/hr-interview-assessement.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { AdminComponent } from './admin/admin.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';
import { HrComponent } from './hr/hr.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { ProgressHttpModule } from 'angular-progress-http';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JdListComponent } from './jd-list/jd-list.component';
import { JdPdfComponent } from './jd-form/jd-pdf/jd-pdf.component'
const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
import { ModalComponent } from './modal/modal.component';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeFormComponent } from "./employee/components/employee-form/employee-form.component";
import { EmployeeUploadComponent } from "./employee/components/employee-upload/employee-upload.component"
import { ListComponent } from './list/list.component';
import { EmployeeService } from "./employee/employee.service";
import { EmployeeComponent } from "./employee/containers/employee/employee.component";
import { ChartsModule } from 'ng2-charts';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidateFormComponent,
    FileSelectDirective,
    EmployeeFormComponent,
    CreateInterviewComponent,
    JdFormComponent,
    HrInterviewAssessementComponent,
    NavBarComponent,
    DashboardComponent,
    ScheduleInterviewComponent,
    JdListComponent,
    JdPdfComponent,
    ListComponent,
    EmployeeComponent,
    EmployeeUploadComponent,
    ModalComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProgressHttpModule, 
    MsalModule.forRoot({
      auth: {
        clientId: '4d31e348-bc89-40d2-821c-f65942084ae3',
        authority: 'https://login.microsoftonline.com/94a76bb1-611b-4eb5-aee5-e312381c32cb',
        redirectUri: 'http://localhost:4200/',
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE, // set to true for IE 11
      }, 
    },
    {
      popUp: !isIE,
      consentScopes: ["user.read", "openid", "profile"],
      unprotectedResources: [],
      protectedResourceMap: [
        ["https://graph.microsoft.com/v1.0/me", ["user.read"]],
      ],
      extraQueryParameters: {}}),
  ],
  providers: [
    NgbActiveModal,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
  ],
  entryComponents: [EmployeeFormComponent, ModalComponent, EmployeeUploadComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
