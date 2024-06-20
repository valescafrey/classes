

console.log("script4.js loaded");

var name = " Valesca";
console.log(typeof name);

var age = 30;
console.log('age needs to be a:' , typeof age);

if (age >= 18) {
    console.log("You are an adult.");
}

// methods or function are the same - behaviour

var persona = {
    name: name,
    age: age,
    eat: function () {
        console.log('${name} is eating...');

    },
};


console.log('persona:' , persona);
persona.eat();

// = just insert value
// == compare number
// === compare number and type
 

var account = {
    balance = 500,
    deposit: function (amount) {
        this.balance += amount;
        console.log('Deposited: ${amount}');
    },
    withdraw: function (amount) {
        this.balance -= amount;
        console.log('Withdrew: ${amount}');
    },
    showBalance: function (.) {
        console.log('Balance: ${this.balance}');
    },

    };

    account.deposit(110);

    account.showBalance();

    var wallet_1 = 100;
    var wallet_2 = 200;

    if (waller_1 == wallet_2) {
        console.log("What I have in both are the same.");
    } ele {
        console.log("What I have in both are different.");
    }
    
    
    if (waller_1 >= wallet_2) {
        console.log("I have more in wallet_1.");
    } ele {
        console.log("I have more in wallet_2.");
    }

    if (waller_1 !== wallet_2) {
        console.log("They are not the same.");
    } ele {
        console.log("They are the same.");
    }