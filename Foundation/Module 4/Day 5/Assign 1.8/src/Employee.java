public class Employee {
	String name,role;
	
	static int empCount=0;
	
	Employee(String name,String role){
		
		this.name=name;
		this.role=role;
		
		empCount++;
	}
	
	static void displayCount() {
		System.out.println("Total Employees are: "+empCount+" Nos");
	}

}
