
public class Manager extends Employee{

	String department;
	
	Manager(String name,double salary,String department){
		super(name,salary);
		this.department=department;
		
	}
	void display() {
		System.out.println("Details:-");
		System.out.println("Name :"+name);
		System.out.println("Salary :"+salary);
		System.out.println("Department :"+department);
	}
}
