
(function myTransaction(){
    let name = document.querySelector("#name");
    let deposit = document.querySelector("#deposit");
    let withdraw = document.querySelector("#withdraw");

    function init() {
        name.addEventListener('click', function () {
            prompt("Enter your Name");
        });
        deposit.addEventListener('click', function () {
            prompt("Amount to deposit");
        })
        withdraw.addEventListener('click', function () {
            prompt("Amount to withdraw");
        })
    }
//
})