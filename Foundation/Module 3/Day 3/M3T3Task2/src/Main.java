
public class Main {
	public static void main(String[] args) {
		
		BankAccount ac=new BankAccount(1234567890L, 12330);
		
		System.out.println("Acc No: "+ac.getaccNumber());
		System.out.println("Main Balance "+ac.getBalance());
		
		ac.deposit(2500);
		
		System.out.println("Updated Balance "+ac.getBalance());
		
		ac.withdraw(-500);
		System.err.println("Updated Balance "+ac.getBalance());
	}
}
