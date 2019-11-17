import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatesMedicineComponent } from './creates-medicine/creates-medicine.component';
import { MedicineDetailComponent } from './medicine-detail/medicine-detail.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'medicine', pathMatch: 'full' },
  { path: 'medicine', component: MedicineListComponent },
  { path: 'add', component: CreatesMedicineComponent },
  { path: 'update/:id', component: UpdateMedicineComponent },
  { path: 'details/:id', component: MedicineDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
