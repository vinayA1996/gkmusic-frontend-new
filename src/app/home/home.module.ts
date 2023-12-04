import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SharedModule } from '../shared/shared.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { RouterModule } from '@angular/router';
import { SongLayout1Component } from './landingpage/song-layout1/song-layout1.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SongPageComponent } from './landingpage/song-page/song-page.component';
@NgModule({
  declarations: [
    HomeLayoutComponent,
    LandingpageComponent,
    SongLayout1Component,
    SongPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CommonComponentsModule,
    NgbCarouselModule,
  ],
  exports: [HomeLayoutComponent],
})
export class HomeModule {}
