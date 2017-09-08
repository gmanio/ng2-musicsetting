import { RouterModule } from '@angular/router';
import { ScrollTestComponent } from './scroll-test.component';

export const ScrollTestRouterModule = RouterModule.forChild([
  {
    path: '',
    children: [
      { path: '', component: ScrollTestComponent }
    ]
  }
]);

