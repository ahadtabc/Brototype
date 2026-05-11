
public class Main {

	public static void main(String[] args) {
		
		ATM a1=new ATM(10000);		//object of ATM class
	
		a1.deposit(2000);
		
		a1.withdraw(6000);			
		
		
		a1.withdraw(15000);   //invalid withdraw because (amount >balance)
		
		System.out.println("Final Balance: "+a1.getBalnce());
	
	}
	
	
}
