/*Assignment 2.15
Implement encapsulation — make variables & methods private.
*/
public class Main {
	public static void main(String[] args) {
		
		Bank b1=new Bank();
		
		b1.setBalance(1000);
		
		System.out.println("Balance Ckeck: " +b1.getBalance());
	}
}
