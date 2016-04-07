class Student {
    
    fullname : string;
    
    constructor(public firstname, public middleinitial, private lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    };
    
    throwError(){
      throw new Error("STACK-TRACE TEST");
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstname + " (" + person.fullname+")");
}

function exceptionTest(person: Person){
    person.throwError();
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);

document.body.innerHTML += "<h3>Check console for exception stack trace</h3>"

exceptionTest(user);