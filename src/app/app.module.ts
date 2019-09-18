import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { NotFoundSvgComponent } from './svg/not-found-svg/not-found-svg.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CalcDomesticComponent } from './pages/calc-domestic/calc-domestic.component';
import { CalcInternationalComponent } from './pages/calc-international/calc-international.component';

const appRoutes: Routes = [
	{ path: '', component: CalcDomesticComponent },
	{ path: 'calc-international', component: CalcInternationalComponent },
	{ path: '**', component: NotFoundComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		NotFoundComponent,
		NotFoundSvgComponent,
		CalcDomesticComponent,
		CalcInternationalComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }