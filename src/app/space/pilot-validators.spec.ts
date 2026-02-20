import {PilotValidators} from './pilot-validators';
import {UntypedFormControl} from '@angular/forms';
import {ajax, AjaxResponse} from 'rxjs/ajax';
import {of} from 'rxjs';

describe('PilotValidators', () => {
  it('should create an instance', () => {
    expect(new PilotValidators()).toBeTruthy();
  });

  describe('pilotName', () => {
    describe('when value is empty', () => {
      it('should return null', () => {
        const control = new UntypedFormControl('');
        expect(PilotValidators.pilotName(control)).toBeNull();
      });
    });

    describe('when starts from uppercase letter', () => {
      it('should return null', () => {
        const control = new UntypedFormControl('Adam');
        expect(PilotValidators.pilotName(control)).toBeNull();
      });
    });

    describe('when starts from lowcase letter', () => {
      it('should return validation object', () => {
        const control = new UntypedFormControl('adam');
        expect(PilotValidators.pilotName(control)).toEqual({pilotName: true});
      });
    });
  });

  describe('pilotForbidden', () => {
    // tutaj testy...
    describe('when value is empty', () => {
      it('should return observable with null', () => {
        const control = new UntypedFormControl('');
        PilotValidators.pilotForbidden(control)
          .subscribe((result) => expect(result).toBeNull());
      });
    });

    describe('when value is forbidden', () => {
      it('should return observable with validation object', () => {
        const control = new UntypedFormControl('Ciapciak');
        spyOn(ajax, 'get').and.returnValue(of({response: [{name: 'Ciapciak'}]} as AjaxResponse));
        PilotValidators.pilotForbidden(control)
          .subscribe((result) => expect(result).toEqual({pilotForbidden: true}));
      });
    });


    describe('when value is not forbidden', () => {
      it('should return observable with null', () => {
        const control = new UntypedFormControl('Adama');
        spyOn(ajax, 'get').and.returnValue(of({response: []} as AjaxResponse));
        PilotValidators.pilotForbidden(control)
          .subscribe((result) => expect(result).toBeNull());
      });
    });
  });
});
