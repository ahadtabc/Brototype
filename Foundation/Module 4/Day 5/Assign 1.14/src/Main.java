/*Assignment 1.14
Create hierarchical inheritance using Shape → Circle, Triangle, Square.
*/
public class Main {
	public static void main(String[] args) {
		
		System.out.println("All Hireratchical Samples below:-");
		System.out.println("===================================");
			Circle obj1=new Circle("Blue", 5.7);
			Triangle obj2=new Triangle("Red", 9, 45);
			Square obj3=new Square("Green", 10, 10);
			
			obj1.displayCircle();
			System.out.println("----------------------------");
			obj2.displayTriangle();
			System.out.println("----------------------------");
			obj3.displaySquare();
	}
}
