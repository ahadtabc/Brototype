/*Assignment 1.6
Create a User class with name, place, age — create objects with default & parameterized constructors.
*/
public class Main {
public static void main(String[] args) {
	
	User obj1=new User();
	User obj2=new User("Rahul","Calicut",25);
	
	obj1.display();		//default
	System.out.println("-------------------------");
	obj2.display();		//parameter
}
}
