
public class BankAccount {

	//encapsulation started here to make privatize
	private long accountNumber;
	private double balance;
	
	
	public BankAccount(long accountNumber,double balance) {
		
		this.accountNumber=accountNumber;
		this.balance=balance;
		
		
		// TODO Auto-generated constructor stub
	}
	
		//This for call the private variable method for balance
	double getBalance() {
		return balance;
		

	}
	
	long getaccNumber() {
		return accountNumber;
	}
	
	void deposit(double amount) {
		if (amount>0) {
			balance+=amount;
			System.out.println("Amount Deposit Success "+amount);
		}else {
			System.out.println("Invalid Deposit");
		}
	}
	
	void withdraw(double amount) {
		if(amount>balance) {
			balance-=amount;
		}System.out.println("Amount withdraw Success "+amount);
	}
	}
