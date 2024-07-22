#!/usr/bin/env node

// Your TypeScript code continues...




interface ibankaccount{
    credit (amount:number) : void;
    debit (amount:number) : void;

}

//class
class Bankaccount implements ibankaccount{
    accountbalance : number;
    constructor (accountbalance:number){
        this.accountbalance=accountbalance

    }
    // publically credit
    public credit(amount:number) : void {
        if (amount>0) {
            this.accountbalance+=amount
            console.log("credit successfully get into new account and your balance is:"+this.accountbalance);

        }
        else{
            console.log("credit successfull")
        }
    }
    // publically debit
    public debit(amount:number) {
        if (amount>0 && amount<this.accountbalance){
            this.accountbalance-=amount
            console.log("debit succesfully share in new account balance:"+this.accountbalance)
        } else {
            console.log("debit succesfully")
        }
    }
}


// customer detail
// customer detail
class Customer {
    person: {
        firstname: string;  // Corrected typo: fisrtname -> firstname
        lastname: string;
    }
    age: number;
    gender: string;
    mobile_number: number;
    bankaccount: Bankaccount;
    
    constructor(person: {firstname:string,lastname:string}, age:number, gender:string, mobile_number:number, bankaccount:Bankaccount){
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    // publically user access
    public display(){
        console.log("Name: " + this.person.firstname + " " + this.person.lastname);  // Corrected firstname usage
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Amount in bank: " + this.bankaccount.accountbalance);
        console.log();
    }
}



const a1=new Bankaccount(800)
const c1=new Customer ( {firstname:"Amjad",lastname:"Ali"},18,"Male",3361232612,a1);
c1.display()
c1.bankaccount.debit(500)
console.log()


const a2=new Bankaccount(800)
const c2=new Customer ( {firstname:"Shahbaz",lastname:"Ali"},19,"Male",3361232612,a2);
c1.display()
c1.bankaccount.debit(200)
console.log()

