
public class Main {

	public static void main(String[] args) {
		
		
		 // Inheritance + Method Overriding
		Animal an=new Dog();
		
		an.soundAnimal();
		
		
		 // Try-Catch-Finally
		try {
			int num =100/0;
			System.out.println("Result"+num);
		}
		
		catch (ArithmeticException e) {
			System.err.println("Sorry.Can't divide by Zero");
		}
		
		finally {
			System.out.println("Program is executed Complete");
		}
		
	}
}
