import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownDirective } from 'src/app/dropdown.directive';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    DropdownDirective,
    CommonModule
  ]
})
export class HeaderModule {
}
