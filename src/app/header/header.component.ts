import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public showServicesDropdown: boolean = false;
  public showPricesDropdown: boolean = false;
  public showPhilatelyDropdown: boolean = false;

  ngOnInit () {  }

  toggleServicesDropdown() {
    this.showServicesDropdown = !this.showServicesDropdown;
    this.showPricesDropdown = false;
    this.showPhilatelyDropdown = false;
  }

  togglePricesDropdown() {
    this.showPricesDropdown = !this.showPricesDropdown;
    this.showServicesDropdown = false;
    this.showPhilatelyDropdown = false;
  }

  togglePhilatelyDropdown() {
    this.showPhilatelyDropdown = !this.showPhilatelyDropdown;
    this.showServicesDropdown = false;
    this.showPricesDropdown = false;
  }

  hideDropDownMenu() {
    this.showServicesDropdown = false;
    this.showPricesDropdown = false;
    this.showPhilatelyDropdown = false;
  }

}
