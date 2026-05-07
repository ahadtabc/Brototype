
public class Calculator {

	void calculateFee(int amount) {
		System.out.println("Total Fee = "+amount);
	}
	
	void calculateFee(int amount, int discount) {
		
		int finalAmonut=amount-discount;
		
		System.out.println("Amount: "+amount);
		System.out.println("Discount : "+discount);
		System.out.println("Final Amount: "+finalAmonut);
	}
}
