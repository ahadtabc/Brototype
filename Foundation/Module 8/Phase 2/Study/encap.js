class Bank{
    #balance=100;

    deposit(amount){
        this.#balance+=amount;
    }

    withdraw(amount){
        if(amount>this.#balance){
            console.log("Insufficient Balance");
            return;
        }
        this.#balance-=amount;
    }

    getBalance(){
        console.log(`Balancec: ${this.#balance}`)
    }
}

const sbi=new Bank();

sbi.deposit(2000);
sbi.withdraw(700);

sbi.getBalance()