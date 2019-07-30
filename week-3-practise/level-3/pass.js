/* Password Validation
   This program should check if each passwords in the array ("password[]") 
   contains valid Password (see below for password criterias) and return 
   new array ("PasswordValidationResult[]") with True/False booleans.

LEVEL 1: 

Passwords must 
- Have at least 5 characters, 
- Have English uppercase letters (A-Z),
- Have English lowercase letters (a-z),
- Have numbers (0-9).

Expected Result:
PasswordValidationResult= [false, false, frue, true, true]

LEVEL 2:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Expected Result:
PasswordValidationResult= [false, false, false, true, true]

LEVEL 3:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Passwords must not be any previous password in previousPassword Array. 
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/




var password = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."];

//var password = ["dvyyeg5"];
var PasswordValidationResult = []

password.forEach(function(item, index) {
    //validar longitud mayor a 5
    if (item.length > 5) {
        PasswordValidationResult[index] = true
    } else {
        PasswordValidationResult[index] = false
    }

    //convertir cada item string en un array
    var arrItem = item.split('')

    //verificar si hay algúna mayuscula
    var tieneMayus = arrItem.some(function(caracter) {
        var codeAscii = caracter.charCodeAt(0)
        if (codeAscii >= 65 && codeAscii <= 90) {
            return true
        }
    })

    //solo reescribir los que pasaron la prueba anterior
    if (PasswordValidationResult[index] === true) {
        PasswordValidationResult[index] = tieneMayus
    }

    //verificar si hay alguna minuscula
    var tieneMinusc = arrItem.some(function(caracter) {
        var codeAscii = caracter.charCodeAt(0)
        if (codeAscii >= 97 && codeAscii <= 122) {
            return true
        }

    })

    if (PasswordValidationResult[index] === true) {
        PasswordValidationResult[index] = tieneMinusc
    }

    var tieneNumber = arrItem.some(function(caracter) {
        if (caracter >= 0 && caracter <= 9) {
            return true
        }
    })

    if (PasswordValidationResult[index] === true) {
        PasswordValidationResult[index] = tieneNumber
    }

})


console.log(PasswordValidationResult)