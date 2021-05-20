window.addEventListener('load', bankAccount);
 function bankAccount(){
    let uName = document.getElementById('uName');
    let deposit = document.getElementById('deposit');
    let withdraw = document.getElementById('withdraw');
    let display = document.getElementById('display');
    let balance = 0;
    function init() {
        uName.addEventListener('click', function () {
            let myName = prompt("Enter your Name");
            console.log(myName);
            display.innerHTML = myName;
        });
        deposit.addEventListener('click', function () {
            let addDeposit = parseFloat(prompt("Amount to deposit"));
            balance += addDeposit;
            console.log(balance);
            display.innerHTML = balance;
        });
        withdraw.addEventListener('click', function () {
            let subractBalance = parseFloat(prompt("Amount to withdraw"));
            balance -= subractBalance
            console.log(balance);
            display.innerHTML = balance;
        });
    }
    init();
}


