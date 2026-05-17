
public class Bank {
	String holdername;
	long accNumber;
	double balance;
	
	static String bankname="State Bank of India";
	
	Bank(String holdername,long accNumber,double balance){
		
		this.holdername=holdername;
		this.accNumber=accNumber;
		this.balance=balance;
		
	}
	
	void displayDetails() {
		System.out.println("Name: "+holdername);
		System.out.println("Acc No: "+accNumber);
		System.out.println("Balance: "+balance);
	}
}
