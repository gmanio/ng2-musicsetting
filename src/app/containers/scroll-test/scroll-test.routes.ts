import { RouterModule } from '@angular/router';
import { ScrollTestComponent } from './scroll-test.component';

export const ScrollTestRouterModule = RouterModule.forChild([
  { path: '', component: ScrollTestComponent }
]);

