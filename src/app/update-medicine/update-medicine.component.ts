import { Component, OnInit } from '@angular/core';

import { MedicineService } from '../medicine.service';
import { Medicine} from'../medicine';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {

  id: number;
  medicine: Medicine;

  constructor(private medicineService: MedicineService,
    private router: Router,private route: ActivatedRoute,) { }


 
    ngOnInit() {
      this.medicine = new Medicine();
  
      this.id = this.route.snapshot.params['id'];
      
      this.medicineService.getMedicine(this.id)
        .subscribe(data => {
          console.log(data)
          this.medicine = data;
        }, error => console.log(error));
    }
  
    updateMedicine() {
      this.medicineService.updateMedicine(this.id, this.medicine)
        .subscribe(data => {
          console.log(data);
          this.gotoList();
        }
         , error => console.log(error));
      this.medicine = new Medicine();
     
    }
  
    onSubmit() {
      this.updateMedicine();    
    }
  
    gotoList() {
      this.router.navigate(['/medicine']);
    }
  }