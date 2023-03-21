// Password Validator
let password =  String(prompt('Enter password: '));
let confirmpassword =  String(prompt('Enter confirm password: '));

if(password == confirmpassword) {
    console.log("Password Matched. Password validation Successful.");
}
else {
    console.log("Password didn't match. Password validation unsuccessful");
}
