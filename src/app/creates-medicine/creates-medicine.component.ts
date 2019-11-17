import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine} from'../medicine';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-creates-medicine',
  templateUrl: './creates-medicine.component.html',
  styleUrls: ['./creates-medicine.component.css']
})
export class CreatesMedicineComponent implements OnInit {

  medicine: Medicine = new Medicine();
  submitted = false;
  medicineForm: FormGroup;

  constructor(private medicineService: MedicineService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.medicineForm = this.formBuilder.group({
      name: ['', Validators.required],
      mfgdate: ['', Validators.required],
      expdate: ['', [Validators.required]],
      
  });
  }
  get f() { return this.medicineForm.controls; }

  newMedicine(): void {
    this.submitted = false;
    this.medicine = new Medicine();
  }

  save() {
    this.medicineService.createMedicine(this.medicine)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/medicine']);
        },
      error => console.log(error));
    this.medicine = new Medicine();
   
  }

  onSubmit( form:NgForm) {
    this.submitted = true;
    console.log("ddd",this.medicineForm.value)
   // this.save();   
    if (this.medicineForm.invalid) {
      return;
  }
  this.medicineService.createMedicine(this.medicineForm.value)
  .subscribe(
    data => {
      console.log(data);
      this.router.navigate(['/medicine']);
    },
     error => console.log(error));
     this.medicine = new Medicine();
  }

  gotoList() {
    this.router.navigate(['/medicine']);
  }
}