
public class Student extends Person{

	int age;
	
	final int rollNo=123;
	
	static String school="IKTHS School";
	
	public Student(String name,int age) {
		super(name);
		this.age=age;
		// TODO Auto-generated constructor stub
	}
	public void display() {
		System.out.println("Name :"+name);
		System.out.println("Age :"+age);
		System.out.println("School :"+school);
		System.out.println("Rollno :"+rollNo);
	}
}