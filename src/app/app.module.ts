import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// IndexComponent
import { AppComponent } from './app.component';

// root router :: lazy module loading
import { RootRouterModule } from './app.routes';

// redux
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { AlbumEffect } from './effects/album.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    RootRouterModule,       // router configure
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      AlbumEffect
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
