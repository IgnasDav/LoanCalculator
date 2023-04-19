import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
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

    this.adminEuriborDate = JSON.parse(
      String(localStorage.getItem('adminFormData'))
    ).adminEuriborDate;
  }

  saveChanges() {
    this.adminEuriborDate = new Date(Date.now()).toISOString().slice(0, 10);
    this.adminForm.value.adminEuriborDate = this.adminEuriborDate;
    localStorage.setItem('adminFormData', JSON.stringify(this.adminForm.value));
  }

  discardChanges() {
    this.ngOnInit();
  }

  handleMinMaxPrices() {
    const priceMin = this.adminForm.value.adminMinPropertyPrice;
    const priceMax = this.adminForm.value.adminMaxPropertyPrice;

    if (priceMin > priceMax) {
      this.adminForm.patchValue({
        priceMin: priceMax,
        priceMax: priceMin,
      });
    }
  }
}
