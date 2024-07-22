#!/usr/bin/env node
// Your TypeScript code continues...
//class
var Bankaccount = /** @class */ (function () {
    function Bankaccount(accountbalance) {
        this.accountbalance = accountbalance;
    }
    // publically credit
    Bankaccount.prototype.credit = function (amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log("credit successfully get into new account and your balance is:" + this.accountbalance);
        }
        else {
            console.log("credit successfull");
        }
    };
    // publically debit
    Bankaccount.prototype.debit = function (amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log("debit succesfully share in new account balance:" + this.accountbalance);
        }
        else {
            console.log("debit succesfully");
        }
    };
    return Bankaccount;
}());
// customer detail
// customer detail
var Customer = /** @class */ (function () {
    function Customer(person, age, gender, mobile_number, bankaccount) {
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    // publically user access
    Customer.prototype.display = function () {
        console.log("Name: " + this.person.firstname + " " + this.person.lastname); // Corrected firstname usage
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Amount in bank: " + this.bankaccount.accountbalance);
        console.log();
    };
    return Customer;
}());
var a1 = new Bankaccount(800);
var c1 = new Customer({ firstname: "Amjad", lastname: "Ali" }, 18, "Male", 3361232612, a1);
c1.display();
c1.bankaccount.debit(500);
console.log();
var a2 = new Bankaccount(800);
var c2 = new Customer({ firstname: "Shahbaz", lastname: "Ali" }, 19, "Male", 3361232612, a2);
c1.display();
c1.bankaccount.debit(200);
console.log();
