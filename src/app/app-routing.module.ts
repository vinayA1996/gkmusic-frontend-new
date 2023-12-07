import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { LandingpageComponent } from './home/landingpage/landingpage.component';
import { AboutUsComponent } from './common-components/about-us/about-us.component';
import { ContactUsComponent } from './common-components/contact-us/contact-us.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { SongPageComponent } from './home/landingpage/song-page/song-page.component';
import { SearchComponent } from './shared/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: LandingpageComponent,
      },
      {
        path: 'about',
        component: AboutUsComponent,
      },
      {
        path: 'contact',
        component: ContactUsComponent,
      },
      {
        // Define a route parameter for layoutId and songId
        path: 'song/:layoutId/:songId',
        component: SongPageComponent,
      },
      {
        // Define a route parameter for layoutId and songId
        path: 'search',
        component: SearchComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
