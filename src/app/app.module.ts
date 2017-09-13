import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// entryComponent
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/error/page-not-found.component';

// root router
import { GlobalErrorHandlerService } from './shared/services/commons/global-error-handler.service';
import { RootRouterModule } from './app.routes';

// redux
import { ReduxModule } from './redux/redux.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    ReduxModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    RootRouterModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
