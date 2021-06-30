import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidator {
    static cannotContainSpace(control:AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0) {
            console.log(control);
            return {cannotContainSpace : true};
        }
        return null;
    }

    static shouldBeUnique(control:AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'monu') {
                    console.log(control);
                    resolve({shouldBeUnique : true});
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

    static oldPassword(control:AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== '1234') {
                    console.log(control);
                    resolve({oldPassword : true});
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}