
public class Bank {

	private double balance;		//private variable
	
	void setBalance(double amount) {			//setter
		if(amount>0) {
			balance=amount;
		}else {
			System.out.println("Invalid Amount");
		}
	}
	
	double getBalance(){				//getter
		return balance;
	}
	
}
