
function myTransaction(){
    let name = document.getElementById('name');
    let deposit = document.getElementById('deposit');
    let withdraw = document.getElementById('withdraw');

    init();
    function init() {
        name.addEventListener('click', function () {
            prompt("Enter your Name");
        });
        deposit.addEventListener('click', function () {
            prompt("Amount to deposit");
        });
        withdraw.addEventListener('click', function () {
            prompt("Amount to withdraw");
        });
    }
//
}
myTransaction();