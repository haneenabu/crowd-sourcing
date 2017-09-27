import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'postList',
    component: PostListComponent
  },
  {
   path: 'posts/:id',
   component: PostDetailComponent
 },
 {
  path: 'admin',
  component: AdminComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
