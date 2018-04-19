/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DateOnlyModule, DateOnly }  from 'angular-date-only';

@Component({
  selector: 'app',
  template: `<h3>number:  {{ dateNumber }}</h3>` +
            `<h3>default:  {{ date }}</h3>` +
            `<h3>toString: {{ toString }}</h3>` +
            `<h3>valueOf: {{ valueOf }}</h3>` +
            `<h3>toJSON: {{ toJSON }}</h3>` +
            `<h3>pipe (default):  {{ date | dateonly }}</h3>` +
            `<h3>pipe (shortDate):  {{ date | dateonly: 'shortDate' }}</h3>` +
            `<h3>pipe (mediumDate):  {{ date | dateonly: 'mediumDate' }}</h3>` +
            `<h3>pipe (fullDate):  {{ date | dateonly: 'fullDate' }}</h3>` +
            `<h3>pipe (full):  {{ date | dateonly: 'full' }}</h3>`
})
class AppComponent implements OnInit {
  dateNumber: number = 20180420;
  date: DateOnly;
  toString: string;
  valueOf: number;
  toJSON: number;


  constructor() { }

  ngOnInit(): void {
    this.date = new DateOnly(this.dateNumber);
    console.log(this.date);
    this.toString = this.date.toString();
    console.log(this.toString);
    this.valueOf = this.date.valueOf();
    console.log(this.valueOf);
    this.toJSON = this.date.toJSON();
    console.log(this.toJSON);
  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    DateOnlyModule
  ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
