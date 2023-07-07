import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageComponent } from './pages/demo/demo.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: DemoPageComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
