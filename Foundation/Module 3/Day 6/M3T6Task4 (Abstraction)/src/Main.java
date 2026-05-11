// Abstraction: Abstract class PaymentMethod

public class Main {

	public static void main(String[] args) {
		
		//reference by PaymentMethoad class with object of UPIpayment class
		PaymentMethod p1=new UPIPayment();
		p1.displayPayment();
		
		//Override of UPIpayment class
		p1.payment(1400);
		
		System.out.println("-------------------------");
		
		PaymentMethod p2=new CardPayment();
		p2.displayPayment();
		
		//Override of Cardpayment class
		p2.payment(5000);
	}
}
