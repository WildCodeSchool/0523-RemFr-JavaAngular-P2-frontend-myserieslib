import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageComponent } from './pages/demo/demo.component';
import { LibraryComponent } from './pages/library/library.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: DemoPageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
