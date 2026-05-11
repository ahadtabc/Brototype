
public abstract class PaymentMethod {
	
	// abstract method with argu 
	abstract void payment(double amount);

	//normal method
	
	public void displayPayment() {
		System.out.println("Payment is Processing...");
	}
}
