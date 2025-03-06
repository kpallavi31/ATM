let balance = 1000;
let pin = 1234;

document.getElementById('pin-btn').addEventListener('click', function() {
    let inputPin = parseInt(document.getElementById('pin-input').value);
    if (inputPin === pin) {
        document.getElementById('message').innerText = 'PIN correct!';
    } else {
        document.getElementById('message').innerText = 'PIN incorrect!';
    }
});

document.getElementById('withdraw-btn').addEventListener('click', function() {
    let amount = parseInt(document.getElementById('amount-input').value);
    if (amount > balance) {
        document.getElementById('message').innerText = 'Insufficient balance!';
    } else {
        balance -= amount;
        document.getElementById('balance').innerText = `Balance: $${balance}`;
        document.getElementById('message').innerText = `Withdrawal successful!`;
    }
});

document.getElementById('deposit-btn').addEventListener('click', function() {
    let amount = parseInt(document.getElementById('amount-input').value);
    balance += amount;
    document.getElementById('balance').innerText = `Balance: $${balance}`;
    document.getElementById('message').innerText = `Deposit successful!`;
});

document.getElementById('balance-btn').addEventListener('click', function() {
    document.getElementById('balance').innerText = `Balance: $${balance}`;
});