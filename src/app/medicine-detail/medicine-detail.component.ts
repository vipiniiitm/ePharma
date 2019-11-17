import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { MedicineService } from '../medicine.service';
import { Medicine} from'../medicine';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {
  id: number;
  medicine: Medicine;

  constructor(private medicineService: MedicineService,
    private router: Router,private route: ActivatedRoute,) {

     }

    ngOnInit() {
      this.medicine = new Medicine();
  
      this.id = this.route.snapshot.params['id'];
      
      this.medicineService.getMedicine(this.id)
        .subscribe(data => {
          console.log(data)
          this.medicine = data; 
        }, error => console.log(error));
    }
  
    list(){
      this.router.navigate(['medicine']);
    }
  }