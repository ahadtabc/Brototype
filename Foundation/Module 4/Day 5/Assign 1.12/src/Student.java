
public class Student extends Person{

	String schoolname;
	int rollno;
	
	Student(String name,int age,String schoolname,int rollno){
		super(name,age);
		this.schoolname=schoolname;
		this.rollno=rollno;
	}
		
	
	public void displayDetails2() {
		displayDetails1();
		System.out.println("School "+schoolname);
		System.out.println("Roll No "+rollno);
	
	}
}
