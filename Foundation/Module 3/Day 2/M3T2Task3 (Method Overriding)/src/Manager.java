/* Method Overriding*/

public class Manager extends Employee{

		
	@Override
	void calculateSalary() {	
		// using super and call Employee's own method
		super.calculateSalary();
		System.out.println("The Manager Salary is 250000");
		

	}
	
	public static void main(String[] args) {
		
		Manager m1=new Manager();
		
		m1.calculateSalary();
	}
}
