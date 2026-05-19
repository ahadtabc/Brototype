
public class Teacher extends Student{
	String Dept;
	
	Teacher(String schoolname,String Dept){
		super(schoolname);
		this.Dept=Dept;
	}
	
	void displayDetails() {
		System.out.println("School Name: "+schoolname);
		System.out.println("Department: "+Dept);
	}
}
