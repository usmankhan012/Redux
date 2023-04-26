import Toast from 'react-native-simple-toast';

const VALIDATE = {
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ALPHABET_ONLY: /^[a-zA-Z \s]*$/,
    NUMBER: /[0-9]$/,
    MOBILE: /^[0-]9{1,20}$/,
    STREET:  /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,20}$/,
    PASSWORD: /[d\-_\s]+$/,
    Password_STREET: /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*.])(?=.{8,})/

}

export const Validators = {
 
  
    checkAlphabet: (name, min, max, value) => {
        var min = min || 2;
        var max = max || 30;
        if (value) {
            if (!VALIDATE.ALPHABET_ONLY.test(value)) { Toast.show(name + ' is Invalid.'); return false }
            else if (value.length < min || value.length > max) { Toast.show(`${name} must be between ${min} to ${max} Characters.`); return false }
            return true
        }
        else { Toast.show(name + " is Required."); return false }
    },

    checkEmail: (name, value) => {
        if (value) {
        if (!VALIDATE.EMAIL.test(value)) {
             Toast.show(`${name} is Invalid.`); 
             return false 
            }
        } 
        else {
            Toast.show(`${name} is Required.`); 
            return false
         }
        return true
    },

    checkNumber: (name, min, max, value) => {
        var min = min || 7;
        var max = max || 15;
        if (value) {
            if (!VALIDATE.NUMBER.test(value)) { 
                Toast.show(`${name} is Invalid.`); 
                return false 
            }
            else if (value.length < min || value.length > max) { Toast.show(`${name} entered must be between ${min} to ${max} Characters.`); return false }
            return true
        }
        else { 
            Toast.show(`${name} is Required.`); 
            return false }
    },

    checkPhoneNumberWithFixLength: (name, max, value) => {
        var max = max || 10;
        if (value) {
            if (!VALIDATE.MOBILE.test(value)) { Toast.show(`${name} is Invalid.`); return false }
            else if (value.length != max) { Toast.show(`${name} should be ${max} digits.`); return false }
            return true
        }
        else { Toast.show(`${name} is Required.`); return false }
    },

    checkOptionalPhoneNumberWithFixLength: (name, max, value) => {
        var max = max || 10;
        if (value) {
            if (!VALIDATE.MOBILE.test(value)) { Toast.show(`${name} is Invalid.`); return false }
            else if (value.length != max) { Toast.show(`${name} should be ${max} digits.`); return false }
            return true
        }
        else { return true }
    },

    checkPhoneNumber: (name, min, max, value) => {
        var min = min || 9;
        var max = max || 15;
        if (value) {
            // if (!VALIDATE.MOBILE.test(value)) { Toast.show(`${name} is Invalid.`); return false }
             if (value.length < min || value.length > max) { Toast.show(`${name} should be greater than ${min - 1} digits.`); return false }
            return true
        }
        else { Toast.show(`${name} is Required.`); return false }
    },

    checkNotNull: (name, min, max, value) => {
        var min = min || 2;
        var max = max || 20;
        if (value) {
            if (value.length < min || value.length > max) { Toast.show(`${name} must be between ${min} to ${max} Characters.`); return false }
            return true
        }
        else { Toast.show(`${name} is Required.`); return false }
    },
    checkOtp: (name, min, max, value) => {
        var min = min || 4;
        var max = max || 10;
        if (value) {
            if (value.length < min || value.length > max) { Toast.show(`${name} must be between ${min} to ${max} Characters.`); return false }
            return true
        }
        else { Toast.show(`${name} is Required.`); return false }
    },
         
    checkRequire: (name, value) => {
        if (value) {
            return true
        }
        else { Toast.show(`Please Enter ${name}`); return false }
    },
    

    checkRequireSelect: (name, value) => {
        if (value) {
            return true
        }
        else { 
            Toast.show(`Please select ${name}`); 
            return false 
        }
    },

    checkPassword: (name, min, max, value) => {
        var min = min || 7;
        var max = max || 15;
        if (value) {
            if (VALIDATE.PASSWORD.test(value)) { Toast.show(`${name} is Invalid.`); return false }
            else if (value.length < min || value.length > max) { Toast.show(`${name} entered must be between ${min} to ${max} Characters.`); return false }
            return true
        }
        else { Toast.show(`${name} is Required.`); return false }
    },

    checkMatch: (name, value, name2, value2) => {
        var min = min || 3;
        var max = max || 40;
        if (value == value2) {
            return true
        }
        else { Toast.show(`${name} and ${name2} should be same.`); return false }
    },

    checkStreet: (name, min, max, value) => {
        var min = min || 7;
        var max = max || 15;
        if (value) {
            console.log('VALIDATE',VALIDATE.STREET.test(value),'value',value)
             if(value.length < min || value.length > max||VALIDATE.Password_STREET.test(value) == false) {
                Toast.show(`Your ${name} must have ${min}-${max} characters including uppercase, lowercase, number, special symbol combination`)
                //  Toast.show(`${name} entered must be between ${min} to ${max} Characters.`); 
                 return true 
            }
            return false
        }
        else { Toast.show(`${name} is Required.`); return false }
    },
}