import { AbstractControl } from '@angular/forms';

export class MyValidatos {
    static PrecioCorrecto(control: AbstractControl) {
        const value = control.value;
        console.log(value);
        if (value > 10000) {
            return {
                precio_invalido: true
            };
        }

        return null;
    }
}