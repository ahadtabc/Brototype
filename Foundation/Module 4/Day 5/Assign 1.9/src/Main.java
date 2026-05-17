/*Assignment 1.9
Create a class Bank and use a static variable for bank name
*/
public class Main {
	public static void main(String[] args) {
		
		Bank obj1=new Bank("Ahad",123456789L,25000);
		Bank obj2=new Bank("Elon",9876543210L, 99999);
		
		System.out.println("--- Welcome to "+Bank.bankname+"---");
	
		obj1.displayDetails();
		System.out.println("===================");
		obj2.displayDetails();
		
		System.out.println("----------------------------");
		System.err.println("Changing Bank name");
		Bank.bankname="Axis Bank Pvt Ltd";
		
		System.out.println("--- Welcome to "+Bank.bankname+"---");
		
		obj1.displayDetails();
		System.out.println("===================");
		obj2.displayDetails();
	}

}
