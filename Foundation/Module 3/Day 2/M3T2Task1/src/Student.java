
public class Student extends Person{

	String course;
	int rollNo;
	
	Student(String name,int age,int rollNo,String course){
		
		super(name,age);
		this.course=course;
		this.rollNo=rollNo;
	}
	
	void display() {
		System.out.println("Student Details :-");
		System.out.println("Name :"+name);
		System.out.println("Age :"+age);
		System.out.println("RollNo :"+rollNo);
		System.out.println("Cousre :"+course);
		
	}	
}
