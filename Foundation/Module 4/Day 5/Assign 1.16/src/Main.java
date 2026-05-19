/*Assignment 1.16
Try public access modifier for classes, variables & methods 
— observe scope.
*/
public class Main {
	public static void main(String[] args) {
		Student obj=new Student();
		
		System.out.println(obj.name);		// varible 
		
		obj.display();						//method
	}
}
