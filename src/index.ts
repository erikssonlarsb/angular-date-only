import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateOnlyPipe } from './dateonly.pipe';

export * from './dateonly.model';
export * from './dateonly.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DateOnlyPipe
  ],
  exports: [
    DateOnlyPipe
  ]
})
export class DateOnlyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DateOnlyModule,
      providers: []
    };
  }
}
