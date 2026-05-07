/* Method Overriding*/

public class Manager extends Employee{

	
	void calculateSalary() {
		
		//method Override using super
		super.calculateSalary();

		
		System.out.println("The Manager Salary is 250000");
		

	}
	
	public static void main(String[] args) {
		
		Manager m1=new Manager();
		
		m1.calculateSalary();
	}
}
