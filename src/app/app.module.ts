import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DemoComponent } from './components/demo/demo.component';
import { DemoPipe } from './pipes/demo.pipe';
import { DemoDirective } from './directives/demo.directive';
import { HomeComponent } from './pages/home/home.component';
import { NavMobComponent } from './components/nav/nav-mob/nav-mob.component';
import { NavPcComponent } from './components/nav/nav-pc/nav-pc.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonAccComponent } from './components/UI/button-acc/button-acc.component';
import { ButtonPriComponent } from './components/UI/button-pri/button-pri.component';
import { GlassDirective } from './directives/glass.directive';
import { BtnTrailerComponent } from './components/UI/btn-trailer/btn-trailer.component';
import { BtnAddComponent } from './components/UI/btn-add/btn-add.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoPipe,
    DemoDirective,
    HomeComponent,
    NavMobComponent,
    NavPcComponent,
    HeaderComponent,
    ButtonAccComponent,
    ButtonPriComponent,
    GlassDirective,
    BtnTrailerComponent,
    BtnAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
