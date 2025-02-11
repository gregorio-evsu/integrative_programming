import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'user',
    loadChildren: () => import('../app/modules/user/user.module').then(m => m.UserModule)
}];
