
let clientsfirstname = document.getElementById("clients_firstname");
let clientslastname = document.getElementById("clients_lastname");
let clientsdesc = document.getElementById("desc");

class PersonalInfos {
    constructor(firstname, lastname, description) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.description = description;
    }
}
let newclient = new PersonalInfos (
    clientsfirstname,
    clientslastname,
);

const result = document.createElement("p");
const result__parent = document.querySelector("section.webpage__formsframe");
result__parent.appendChild(result);