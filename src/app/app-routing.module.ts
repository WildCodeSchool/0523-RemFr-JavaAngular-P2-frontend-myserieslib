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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'sign-up', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'trending', component: TrendingsPageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'main', component: MainComponent, outlet: 'dashboardOutlet' },
      { path: 'serie-list', component: SerieListComponent, outlet: 'dashboardOutlet' },
      { path: 'add-serie', component: AddSerieComponent, outlet: 'dashboardOutlet' },
      { path: 'categories', component: CategoriesComponent, outlet: 'dashboardOutlet' },
      { path: 'users', component: UsersComponent, outlet: 'dashboardOutlet' },
      // { path: 'profile', component: ProfileComponent, outlet: 'dashboardOutlet' },
      // { path: 'favorites', component: FavoritesComponent, outlet: 'dashboardOutlet' },
      // { path: 'password', component: ChangePasswordComponent, outlet: 'dashboardOutlet' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
