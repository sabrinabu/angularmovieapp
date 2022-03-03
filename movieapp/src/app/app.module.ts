import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsbannerComponent } from './components/itemsbanner/itemsbanner.component';
import { MovieitemComponent } from './components/movieitem/movieitem.component';
import {PaginatorModule} from 'primeng/paginator';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    ItemsbannerComponent,
    MovieitemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule,PaginatorModule,CdkVirtualScrollViewport],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
