/*Assignment 2.18
Research exception handling in Java & use if-else to 
handle divide-by-zero.
*/
public class Main {
	public static void main(String[] args) {
		
		int a= 10;
		int b=0;
		
		if(b!=0) {
			int result=a/b;
			System.out.println("The result is: "+result);
		}else {
			System.out.println("Can't divide by Zero");
		}
	}

}
