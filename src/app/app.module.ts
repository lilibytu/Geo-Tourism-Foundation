import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ConstructionComponent} from './construction/construction.component';
import { HomeComponent } from './home/home.component';
import {SliderComponent} from './home/slider/slider.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { ServicesComponent } from './home/services/services.component';
import {FooterComponent} from './home/footer/footer.component';
import {ContactsComponent} from './home/contacts/contacts.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutComponent } from './home/about/about.component';
import {MatListModule} from '@angular/material/list';
import { PartnersComponent } from './home/partners/partners.component';
import { OurTeamComponent } from './home/our-team/our-team.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgrammeComponent } from './home/programme/programme.component';
import { OurImpactsComponent } from './home/our-impacts/our-impacts.component';

@NgModule({
    declarations: [
        AppComponent,
        ConstructionComponent,
        HomeComponent,
        SliderComponent,
        ServicesComponent,
        FooterComponent,
        ContactsComponent,
        AboutComponent,
        PartnersComponent,
        OurTeamComponent,
        NavbarComponent,
        ProgrammeComponent,
        OurImpactsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
