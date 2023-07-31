import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { MatIconModule } from '@angular/material/icon';
import { NgxSplideModule } from 'ngx-splide';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { BgLoginComponent } from './components/bg-login/bg-login.component';
import { StarScoreComponent } from './components/star-score/star-score.component';
import { StoreModule } from '@ngrx/store';
import { ModalComponent } from './components/modal/modal.component';
import { reducer } from './services/store/user.reducer';
import { JwtInterceptor } from './utils/jwt.interceptor';
import { TrendingComponent } from './components/trending/trending.component';
import { TrendingsPageComponent } from './pages/trendings-page/trendings-page.component';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SideBarComponent } from './components/dashboard/side-bar/side-bar.component';
import { AddSerieComponent } from './components/dashboard/admin/add-serie/add-serie.component';
import { UsersComponent } from './components/dashboard/admin/users/users.component';
import { SerieListComponent } from './components/dashboard/admin/serie-list/serie-list.component';
import { CategoriesComponent } from './components/dashboard/admin/categories/categories.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { SerieTableComponent } from './components/dashboard/table/serie-table/serie-table.component';
import { CategoryTableComponent } from './components/dashboard/table/category-table/category-table.component';
import { CategoryModalComponent } from './components/dashboard/modals/category-modal/category-modal.component';
import { UsersTableComponent } from './components/dashboard/table/users-table/users-table.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { CategoryComponent } from './components/category/category.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { UpdateProfileComponent } from './pages/profile/updateProfile/update-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginModalComponent } from './components/modal/login-modal/login-modal.component';
import { HistoryCardComponent } from './components/history-card/history-card.component';
import { RetrievePasswordComponent } from './pages/retrieve-password/retrieve-password.component';
import { ForgottenPasswordComponent } from './pages/forgotten-password/forgotten-password.component';
import { EpisodeListComponent } from './components/dashboard/admin/episode-list/episode-list.component';
import { EpisodeTableComponent } from './components/dashboard/table/episode-table/episode-table.component';
import { AddEpisodeComponent } from './components/dashboard/admin/add-episode/add-episode.component';
import { KeepWatchingComponent } from './components/keep-watching/keep-watching.component';
import { CommentsComponent } from './components/dashboard/admin/comments/comments.component';
import { BtnAddDesktopComponent } from './components/UI/btn-add-desktop/btn-add-desktop.component';
import { ActorsComponent } from './components/dashboard/admin/actors/actors.component';
import { ActorsTableComponent } from './components/dashboard/table/actors-table/actors-table.component';
import { ActorModalComponent } from './components/dashboard/modals/actor-modal/actor-modal.component';

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
    BgLoginComponent,
    StarScoreComponent,
    ModalComponent,
    TrendingComponent,
    TrendingsPageComponent,
    DashboardComponent,
    SideBarComponent,
    AddSerieComponent,
    UsersComponent,
    SerieListComponent,
    CategoriesComponent,
    MainComponent,
    SerieTableComponent,
    CategoryTableComponent,
    CategoryModalComponent,
    UsersTableComponent,
    UploaderComponent,
    CategoryComponent,
    SuggestionsComponent,
    UpdateProfileComponent,
    ProfileComponent,
    LoginModalComponent,
    HistoryCardComponent,
    RetrievePasswordComponent,
    ForgottenPasswordComponent,
    EpisodeListComponent,
    EpisodeTableComponent,
    AddEpisodeComponent,
    KeepWatchingComponent,
    CommentsComponent,
    BtnAddDesktopComponent,
    ActorsComponent,
    ActorsTableComponent,
    ActorModalComponent,
  ],

  imports: [
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    NgxSplideModule,
    MatPaginatorModule,
    MatFormFieldModule,
    StoreModule.forRoot({ userState: reducer }),
    ToastrModule.forRoot(),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
