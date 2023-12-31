import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TrendingsPageComponent } from './pages/trendings-page/trendings-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SerieListComponent } from './components/dashboard/admin/serie-list/serie-list.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { AddSerieComponent } from './components/dashboard/admin/add-serie/add-serie.component';
import { CategoriesComponent } from './components/dashboard/admin/categories/categories.component';
import { UsersComponent } from './components/dashboard/admin/users/users.component';
import { UpdateProfileComponent } from './pages/profile/updateProfile/update-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './core/auth.guard';
import { RetrievePasswordComponent } from './pages/retrieve-password/retrieve-password.component';
import { ForgottenPasswordComponent } from './pages/forgotten-password/forgotten-password.component';
import { AdminGuard } from './core/admin.guard';
import { EpisodeListComponent } from './components/dashboard/admin/episode-list/episode-list.component';
import { AddEpisodeComponent } from './components/dashboard/admin/add-episode/add-episode.component';
import { CommentsComponent } from './components/dashboard/admin/comments/comments.component';
import { ActorsComponent } from './components/dashboard/admin/actors/actors.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'sign-up', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'login/:register', component: LoginPageComponent },
  { path: 'trending', component: TrendingsPageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'main', component: MainComponent, outlet: 'dashboardOutlet' },
      { path: 'serie-list', component: SerieListComponent, outlet: 'dashboardOutlet' },
      { path: 'serie', component: AddSerieComponent, outlet: 'dashboardOutlet' },
      { path: 'serie/:id', component: AddSerieComponent, outlet: 'dashboardOutlet' },
      { path: 'categories', component: CategoriesComponent, outlet: 'dashboardOutlet' },
      { path: 'actors', component: ActorsComponent, outlet: 'dashboardOutlet' },
      { path: 'users', component: UsersComponent, outlet: 'dashboardOutlet' },
      { path: 'episode-list', component: EpisodeListComponent, outlet: 'dashboardOutlet' },
      { path: 'episode', component: AddEpisodeComponent, outlet: 'dashboardOutlet' },
      { path: 'comments', component: CommentsComponent, outlet: 'dashboardOutlet' },
    ],
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'update-profile', component: UpdateProfileComponent, canActivate: [AuthGuard] },
  { path: 'retrieve-password/:token', component: RetrievePasswordComponent },
  { path: 'forgotten-password', component: ForgottenPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
