// 3. Age in Days

const person = {
    firstName : "Mithun",
    lastName : "S",
    age : 20
}

function ageInDays(personObject,callback) {
    const fullName = `${personObject.firstName} ${personObject.lastName}`;
    const ageInDays = personObject.age * 365;
    callback(fullName,ageInDays);
}

function logResult(fullName,ageInDays) {
    console.log(`The person's full name is ${fullName} and their age in daya is ${ageInDays}`);
}

ageInDays(person,logResult);

// output:
// The person's full name is Mithun S and their age in daya is 7300
