/*
 Assignment 2.3
Implement polymorphism — create multiple classes with method overloading.

 */
public class Main {
	public static void main(String[] args) {
		
		Calculator c1=new Calculator();

	System.out.println("Add Two integers :"+c1.add(20, 30));
	System.out.println("Add Three integers :"+c1.add(150,250,350));
	System.out.println("Add Two floats :"+c1.add(413.51, 722.18));		
		
	}

}
