window.addEventListener('load', myTransaction);
 function myTransaction(){
    let uName = document.getElementById('uName');
    let deposit = document.getElementById('deposit');
    let withdraw = document.getElementById('withdraw');
    function init() {
        uName.addEventListener('click', function () {
            prompt("Enter your Name");
        });
        deposit.addEventListener('click', function () {
            prompt("Amount to deposit");
        });
        withdraw.addEventListener('click', function () {
            prompt("Amount to withdraw");
        });
    }
    init();
}
