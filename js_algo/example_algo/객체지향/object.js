function Checking(amount) {   
    this.balance = amount; // 속성   
    this.deposit = deposit; // 메소드(함수)   
    this.withdraw = withdraw; // 메소드(함수)   
    this.toString = toString; // 메소드(함수)
}


function deposit(amount) { //입금
    this.balance += amount; 
}

function withdraw(amount) { //출금
    if (amount <= this.balance) { //잔액 여유 시
        this.balance -= amount;   
    }   
    if (amount > this.balance) { //잔액 부족 시
        print("잔액 부족");   
    } 
}
function toString() { //잔고 표시
    return "잔고: " + this.balance; 
}


var account = new Checking(500); 
account.deposit(1000); 
console.log(account.toString()); //"잔고: 1500"
account.withdraw(750); 
print(account.toString()); // "잔고: 750" 
account.withdraw(800); // "잔액 부족"
print(account.toString()); // 잔고: 750


