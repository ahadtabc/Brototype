/*Assignment 2.16
Create setters & getters — access private variables from outside.
*/
public class Main {
	public static void main(String[] args) {
		
		BankAccount b1=new BankAccount();
		
		b1.setBalance(5000);
		
		System.out.println("The Balance is: "+b1.getBalance());
	}

}
