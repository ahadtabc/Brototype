
public class ATM {
	
	//encapsulation

	private double balance;
	
	
	
	//constructor with parameter/argu
	public ATM(double balance){
		if(balance>=0) {
			this.balance=balance;
			
		}else {
			this.balance=0;			//instance variable (private balance)
		}
	}
	
	
    // Getter for check balance
	double getBalnce() {
		return balance;
		
	}
	
		
	void deposit(double amount) {
		if(amount>0) {
			balance=balance+amount;
			System.out.println(amount+" :Amount is Deposited");
			System.out.println("Main Balance: "+balance);
			
		}else {
			System.err.println("Invalid Deposit");
		}
		}
	
	
	
	void  withdraw(double amount) {
		if(amount <= 0) {
			System.out.println(amount+" :Invalid amount for withdraw");
			
		}else if(amount >balance) {
			System.out.println(amount+" :Insufficient Balance");
			
		}else {
			balance=balance-amount;
			System.out.println("Withdraw: "+amount);
		}
		
	}
}
