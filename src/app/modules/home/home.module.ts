import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { InputAddItemsComponent } from './components/input-add-items/input-add-items.component';
import { ButtonDeleteAllComponent } from './components/button-delete-all/button-delete-all.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    ListComponent,
    InputAddItemsComponent,
    ButtonDeleteAllComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [CommonModule],
})
export class HomeModule {}
