/*Assignment 1.20
Try final modifier — observe behavior changes in classes,
methods & variables.
*/
public class Main {

	public static void main(String[] args) {
		
		Student obj=new Student();	// for final variable
		
		obj.display();
		
		// obj.college ="Gems College";   not work because it is final variable
		
		Phone p1 = new Phone();		// for final class

        p1.sound();
        
        Internet n1=new Internet();	// for final method
        n1.show();
		
	}
}
