import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrialComponent } from './components/trial/trial.component';
import { TypingComponent } from './components/typing/typing.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeToggleComponent } from './components/header/theme-toggle/theme-toggle.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { CertificatesCardComponent } from './components/certificates/certificates-card/certificates-card.component';
import { PortfolioCardComponent } from './components/portfolio/portfolio-card/portfolio-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TrialComponent,
    TypingComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    HeaderComponent,
    ThemeToggleComponent,
    CertificatesComponent,
    CertificatesCardComponent,
    PortfolioCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
