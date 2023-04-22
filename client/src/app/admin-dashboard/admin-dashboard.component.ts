import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  adminForm: FormGroup;

  adminEuriborDate!: string;

  validatorsNum = [Validators.required, Validators.pattern(/^\d+\.?\d*$/)];
  validatorsPercent = [
    ...this.validatorsNum,
    Validators.min(0),
    Validators.max(100),
  ];

  ngOnInit() {
    this.adminForm = new FormGroup({
      adminEuriborRate: new FormControl(3.6, this.validatorsPercent),
      adminBankMargin: new FormControl(2.5, this.validatorsPercent),
      adminMinPropertyPrice: new FormControl(20000, this.validatorsNum),
      adminMaxPropertyPrice: new FormControl(800000, this.validatorsNum),
      adminDefaultPropertyPrice: new FormControl(250000, this.validatorsNum),
      adminMinDepositPercent: new FormControl(20, this.validatorsPercent),
      adminContractFee: new FormControl(350, this.validatorsNum),
      adminMonthlyBankFee: new FormControl(25, this.validatorsNum),
      adminRegistrationFee: new FormControl(250, this.validatorsNum),
    });

    this.adminService
      .getData()
      .pipe(take(1))
      .subscribe((data) => {
        this.adminForm.patchValue(data);
        this.adminEuriborDate = data.adminEuriborDate;
      });
  }

  saveChanges() {
    this.adminService.postData(this.adminForm.value).pipe(take(1)).subscribe();
  }

  discardChanges() {
    this.ngOnInit();
  }

  handleMinMaxPrices() {
    const priceMin = this.adminForm.value.adminMinPropertyPrice;
    const priceMax = this.adminForm.value.adminMaxPropertyPrice;

    if (priceMin > priceMax) {
      this.adminForm.patchValue({
        adminMinPropertyPrice: priceMax,
        adminMaxPropertyPrice: priceMin,
      });
    }
  }
}
