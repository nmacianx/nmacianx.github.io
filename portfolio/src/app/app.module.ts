import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { WorkItemComponent } from './work-item/work-item.component';
import { EducationItemComponent } from './education-item/education-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    WelcomeComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    WorkComponent,
    EducationComponent,
    ContactComponent,
    WorkItemComponent,
    EducationItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPageScrollCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
