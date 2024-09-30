import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FormUpdateComponent } from './components/forms/form-update/form-update.component';
import { FormCreateComponent } from './components/forms/form-create/form-create.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'user/:user_id', component: UserDetailComponent
  },
  {
    path: 'form', component: FormCreateComponent
  },
  {
    path: 'form/:user_id', component: FormUpdateComponent
  },
];
