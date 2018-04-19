import { Injectable, PipeTransform, Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';

import { DateOnly } from './index';

@Pipe({name: 'dateonly'})
@Injectable()
export class DateOnlyPipe extends DatePipe implements PipeTransform  {
  transform(date: DateOnly, format = 'mediumDate', timezone?: string, locale?: string): string|null {
    return super.transform(date.toDate(), format, timezone, locale);
  }
}
