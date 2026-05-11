
public class CardPayment extends PaymentMethod{

	//abstract method and override with CardPayment class
	@Override
	public void payment(double amount) {
		System.out.println("Payment Done "+amount+" via Card");
	}
}
