import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { DemoPageComponent } from './pages/demo/demo.component';
import { DemoComponent } from './components/demo/demo.component';
import { DemoPipe } from './pipes/demo.pipe';
import { DemoDirective } from './directives/demo.directive';
import { LibraryComponent } from './pages/library/library.component';
import { CardHoverComponent } from './components/card-hover/card-hover.component';
import { SearchComponent } from './pages/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FilterSearchBarComponent } from './components/filter-search-bar/filter-search-bar.component';
import { CardsComponent } from './components/cards/cards.component';
import { RatingComponent } from './components/rating/rating.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DetailEpisodesComponent } from './components/detail-episodes/detail-episodes.component';
import { DetailInformationsComponent } from './components/detail-informations/detail-informations.component';
import { CardActorComponent } from './components/card-actor/card-actor.component';
import { CommentComponent } from './components/comment/comment.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    DemoPageComponent,
    DemoComponent,
    DemoPipe,
    DemoDirective,
    LibraryComponent,
    CardHoverComponent,
    SearchComponent,
    FilterSearchBarComponent,
    CardsComponent,
    RatingComponent,
    DetailComponent,
    DetailEpisodesComponent,
    DetailInformationsComponent,
    CardActorComponent,
    CommentComponent,
    LoginComponent,
    SignupComponent,
    LoginPageComponent,
    SignupPageComponent,
  ],
  imports: [
    MatSelectModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
