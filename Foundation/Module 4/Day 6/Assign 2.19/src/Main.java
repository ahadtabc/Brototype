/*Assignment 2.19
Use try-catch to handle divide-by-zero — compare with if-else.
*/
public class Main {
public static void main(String[] args) {
	 
	int a=10;
	int b=0;
	
	try {
		int result=a/b;
		
	}catch (ArithmeticException e) {
		System.out.println("Can't divide by zero");
	}finally {
		System.out.println("Program is completed");
	}
}
}
