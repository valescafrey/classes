


alert ('test')


// this is the way to declare a behaviour


function myFunction (amount, account) {

     console.log("called myFunction");
}

var account = {
    name: "valesca",
    account_number: 203040,
    deposit: function (amount) {
        this.balance += amount;
        console.log('Deposited: ${amount}');
    },
 };

// this is the way to call a behaviour
// deposit (100, account);


console.log(typeof account.account_number);
var value = account.account_number.toString();
console.log(typeof value);

console.log(account.balance.toFixed(2));

