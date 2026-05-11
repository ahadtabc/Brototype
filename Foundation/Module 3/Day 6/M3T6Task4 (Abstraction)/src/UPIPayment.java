
public class UPIPayment extends PaymentMethod{

	
	//abstract method and override with UPIPayment class
	@Override
	public void payment(double amount) {
		System.out.println("Payment Done "+amount+" via UPI");
	}
}
