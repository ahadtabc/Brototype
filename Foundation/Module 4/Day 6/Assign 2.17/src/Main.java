/*Assignment 2.17
Understand encapsulation effects with a real-time example.
*/
public class Main {
	public static void main(String[] args) {
		
		BankAccount b1=new BankAccount();
		
		b1.deposit(40000);
		b1.widthdraw(3000);
		
		System.out.println("Balance is : "+b1.getBalance());
	}

}
