import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ScrollToTopComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, ScrollToTopComponent],
})
export class SharedModule {}
