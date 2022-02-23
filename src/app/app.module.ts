import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FullComponent } from './full/full.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BannerComponent } from './banner/banner.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



// import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
// import {MenuItem} from 'primeng/api';                  //api
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FullComponent,
    SideBarComponent,
    HomeComponent,
    AboutComponent,
    TestimonialsComponent,
    BannerComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
    // AccordionModule,
    
    // NgbModule,
    // NgbAlertModule,
    // NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
