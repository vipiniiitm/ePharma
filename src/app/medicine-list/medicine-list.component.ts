import { Component, OnInit } from '@angular/core';
import { MedicineDetailComponent } from'../medicine-detail/medicine-detail.component';
import { Medicine} from'../medicine';
import { Router } from '@angular/router';

import { MedicineService } from '../medicine.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  medicine: Observable<Medicine[]>;
  id: number;
  medicines: Medicine;


  constructor(private medicineService: MedicineService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.medicine = this.medicineService.getMedicineList();
  }

  deleteMedicine(id: number) {
    console.log(id);
    this.medicineService.deleteMedicine(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  medicineDetails(id: number){
   this.router.navigate(['details', id]);
  }
  updateMedicine(id: number){

    this.router.navigate(['update', id]);
  }
  clone(data){
    delete data.id;
    console.log(data);
    this.medicineService.createMedicine(data)
    .subscribe(
      data => {
        console.log(data);
         this.reloadData();
      },
    error => console.log(error));
   // console.log(data);
  }

}