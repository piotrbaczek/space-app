import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpaceModule} from './space/space.module';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {BlackHoleComponent} from './black-hole/black-hole.component';
import {A2sCommComponent} from 'a2s-comm';

@NgModule(
  {
    declarations: [
      AppComponent,
      BlackHoleComponent
    ],
    bootstrap: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      SpaceModule,
      AppRoutingModule,
      A2sCommComponent
    ],
    providers: [
      provideHttpClient(withInterceptorsFromDi())
    ]
  }
)
export class AppModule {
}
