/*Try Catch and Final*/
public class DivisionbyZero {

	public static void main(String[] args) {
		
		int num1=100;
		int num2=0;
		
		try {
			int result = num1/num2;
			System.out.println("Result is: "+result);
		}catch(ArithmeticException e){
			
			System.out.println("ERROR!! Can't divide by Zero ");
			
		}finally {
			System.out.println("Program execution completed");
		}
	}
}
