window.addEventListener('load', bankAccount);
 function bankAccount(){
    let uName = document.getElementById('uName');
    let deposit = document.getElementById('deposit');
    let withdraw = document.getElementById('withdraw');
    let display = document.getElementById('display');
    let balance = 0;
    let ownerName;
    function init() {
        uName.addEventListener('click', function (ownerName) {
            ownerName = prompt("Enter your Name");
            let owner = ownerName
            console.log(owner);
            display.innerHTML = owner;
            deposit.addEventListener('click', function () {
                let addDeposit = parseFloat(prompt("Amount to deposit"));
                balance += addDeposit;
                console.log(balance);
                display.innerHTML = (`${owner}` + ` Balance: ${balance}`);
            });
            withdraw.addEventListener('click', function () {
                let subractBalance = parseFloat(prompt("Amount to withdraw"));
                balance -= subractBalance
                console.log(balance);
                display.innerHTML = (`${owner}` + ` Balance: ${balance}` );
            });
        });
    }
    init();
}


