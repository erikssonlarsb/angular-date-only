## About
Angular module for managing JavaScript dates without the time part.

Working with dates in JavaScript can be a hassle, since Date objects also contain a time part. Due to time-zone differences between application and server, or from storing UTC dates in the database (as in MongoDB), the date-only representation can easily shift one day back or forth.

For server-side, there's two packages available by Bob Lauer: [dateonly](https://www.npmjs.com/package/dateonly) and [mongoose-dateonly](https://www.npmjs.com/package/mongoose-dateonly).

Angular-date-only is useful when you retrieve date-only objects from an api and want to preserve this date structure.

For trivial usage, checkout the library playground at the  [angular-date-only](https://github.com/erikssonlarsb/angular-date-only) GitHub repository.

For an example of how the module can be utilized in a MEAN (MongoDB, Express, Angular, Node) setup, please checkout my [hox-trader](https://github.com/erikssonlarsb/hox-trader) repository on GitHub.

## Installation

To install this library, run:

```bash
$ npm install angular-date-only --save
```

## Usage

Once installed, import `DateOnlyModule` into your `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the module
import { DateOnlyModule } from 'angular-date-only';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the module as an import
    DateOnlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

When the module is imported, you can use the class and pipe in your Angular application:
#### Class in models
```typescript
import { DateOnly } from  'angular-date-only';

export class User {
  name: string;
  birthday: DateOnly;

  constructor(name: string, birthday: DateOnly) {
    this.name = name;
    this.birthday = birthday;
  }
}
```

#### Class in components
```typescript
import { Component, OnInit } from '@angular/core';
import { DateOnly }  from 'angular-date-only';

@Component({
  selector: 'app',
  template: `<h3>date-only: {{ date }}</h3>`
})
class AppComponent implements OnInit {
  dateNumber: number = 20180420;
  date: DateOnly;

  constructor() { }

  ngOnInit(): void {
    this.date = new DateOnly(this.dateNumber);
  }
}
```

#### Pipe in view
The dateonly pipe extends the standard Angular date pipe. So any formatting argument
can be applied in similar manner,
```xml
<h1>{{ user.birthday | dateonly }}</h1>
<h1>{{ user.birthday | dateonly: 'shortDate' }}</h1>
<h1>{{ user.birthday | dateonly: 'full' }}</h1>
```

#### Pipe in code
```typescript
import { Component } from '@angular/core';
import { DateOnlyPipe } from 'angular-date-only';

@Component({
  selector: 'app',
  template: `<h3>date-only: {{ bithday }}</h3>`,
  providers: [DateOnlyPipe]
})
class AppComponent implements OnInit {
  bithday: string;

  constructor(private dateOnlyPipe: DateOnlyPipe)

  setBirthDay(birthday: number): void {
    this.birthday = this.dateOnlyPipe.transform(birthday;)
  }
}

```

## Testing
To be implemented.

## License

MIT © [Lars Eriksson](mailto:erikssonlarsb@gmail.com)
