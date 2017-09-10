import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const HomeRouterModule = RouterModule.forChild([
  { path: '', component: HomeComponent }
]);

