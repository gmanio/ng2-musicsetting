import { RouterModule } from '@angular/router';
import { PopularComponent } from './popular.component';

export const PopularRouterModule = RouterModule.forChild([
  { path: '', component: PopularComponent }
]);

