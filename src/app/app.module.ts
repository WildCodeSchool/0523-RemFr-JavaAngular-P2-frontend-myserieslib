import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { NgxSplideModule } from 'ngx-splide';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';

import { DemoComponent } from './components/demo/demo.component';
import { DemoPipe } from './pipes/demo.pipe';
import { DemoDirective } from './directives/demo.directive';
import { LibraryComponent } from './pages/library/library.component';
import { CardHoverComponent } from './components/card-hover/card-hover.component';
import { SearchComponent } from './pages/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { FilterSearchBarComponent } from './components/filter-search-bar/filter-search-bar.component';
import { CardsComponent } from './components/cards/cards.component';
import { RatingComponent } from './components/rating/rating.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NavMobComponent } from './components/nav/nav-mob/nav-mob.component';
import { NavPcComponent } from './components/nav/nav-pc/nav-pc.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonAccComponent } from './components/UI/button-acc/button-acc.component';
import { ButtonPriComponent } from './components/UI/button-pri/button-pri.component';
import { GlassDirective } from './directives/glass.directive';
import { BtnTrailerComponent } from './components/UI/btn-trailer/btn-trailer.component';
import { BtnAddComponent } from './components/UI/btn-add/btn-add.component';
import { SwiperCardsComponent } from './components/swiper-cards/swiper-cards.component';
import { MobAdsComponent } from './components/mob-ads/mob-ads.component';
import { DetailEpisodesComponent } from './components/detail-episodes/detail-episodes.component';
import { DetailInformationsComponent } from './components/detail-informations/detail-informations.component';
import { CardActorComponent } from './components/card-actor/card-actor.component';
import { CommentComponent } from './components/comment/comment.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputComponent } from './components/comment/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
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
    HomeComponent,
    NavMobComponent,
    NavPcComponent,
    HeaderComponent,
    ButtonAccComponent,
    ButtonPriComponent,
    GlassDirective,
    BtnTrailerComponent,
    BtnAddComponent,
    SwiperCardsComponent,
    MobAdsComponent,
    DetailEpisodesComponent,
    DetailInformationsComponent,
    CardActorComponent,
    CommentComponent,
    LoginComponent,
    SignupComponent,
    LoginPageComponent,
    SignupPageComponent,
    InputComponent,
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
    MatIconModule,
    NgxSplideModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
