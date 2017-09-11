import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// entryComponent
import { AppComponent } from './app.component';

// root router
import { RootRouterModule } from './app.routes';

// redux
import { ReduxModule } from './redux/redux.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReduxModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    RootRouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
