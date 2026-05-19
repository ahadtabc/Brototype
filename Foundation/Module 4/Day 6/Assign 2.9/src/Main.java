/*Assignment 2.9
Implement abstract classes — declare abstract & non-abstract methods.
*/
public class Main {
public static void main(String[] args) {
	
	Cat c1=new Cat();
	
	c1.sound();		//abstract method
	c1.sleep();		// normal method in abstract class
	c1.displayCat();	// normal method in Cat class
}
}
