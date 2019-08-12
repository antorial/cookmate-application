import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CookmateSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [CookmateSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CookmateSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CookmateSharedModule {
  static forRoot() {
    return {
      ngModule: CookmateSharedModule
    };
  }
}
