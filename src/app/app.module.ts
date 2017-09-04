import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { HomeModule } from './containers/home/home.module';

// IndexComponent
import { AppComponent } from './app.component';

// root router :: lazy module loading
import { RootRouterModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    RootRouterModule,       // router configure
    HomeModule,             // initial loading module
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
