/*Assignment 1.8
Create a class Employee and count how many objects are created 
using static.
*/
public class Main {
	public static void main(String[] args) {
		
		System.out.println("Employees List:-")
		;
		Employee obj1= new Employee("Ahad","flutter");
		System.out.println("Created"+obj1.name);
		
		Employee obj2= new Employee("Rahul","Game Develop");
		System.out.println("Created"+obj2.name);
		
		Employee obj3= new Employee("Naveen","Mern Stack");
		System.out.println("Created"+obj3.name);
		
		Employee obj4= new Employee("Akshay","Bio Tech");
		System.out.println("Created"+obj4.name);
		
		System.out.println("__________________________");
		System.out.println("Total Employees count below:-");
		Employee.displayCount();
	}
}
