
public class BankAccount {

	private double balance =15000;		//private variable
	
	public void deposit(double amount) {				//deposit method
		
		if(amount>0) {
			balance=balance+amount;
			System.out.println("Deposited Amount: "+amount);
		}
	}
	
	
	public void widthdraw(double amount) {		//withdraw method
		if(amount <=balance) {
			balance=balance-amount;
			System.out.println("Withdraw Amount:"+amount);
		}else {
			System.out.println("Sorry! Insufficient Balance");
		}
		
	}
	
		double getBalance() {				//getter method
			return balance;
		}
	
	
	
	
	
}
