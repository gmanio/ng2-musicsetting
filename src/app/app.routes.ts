import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/error/page-not-found.component';

export const RootRouterModule = RouterModule.forRoot(
  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'login', loadChildren: './container/login/login.module#LoginModule' },
    { path: 'home', loadChildren: './containers/home/home.module#HomeModule' },
    { path: 'popular', loadChildren: './containers/popular/popular.module#PopularModule' },
    // { path: 'newest', loadChildren: './container/newest/newest.module#NewestModule' },
    // { path: 'theme', loadChildren: './container/theme/theme.module#ThemeModule' },
    // { path: 'theme-list', loadChildren: './container/theme-list/slack.module#SlackModule' },
    // { path: 'play-list', loadChildren: './container/play-list/slack.module#SlackModule' },
    // { path: 'purchase', loadChildren: './container/purchase/purchase.module#SlackModule' },
    // { path: '**', component: PageNotFoundComponent }
  ],

  /**
   *  Some browsers does not support HTML5 pushstate.
   */
  {
    useHash: true
  }
);

