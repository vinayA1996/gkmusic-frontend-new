import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [AdminLayoutComponent, LoginComponent],
  imports: [CommonModule, SharedModule],
})
export class AdminModule {}
