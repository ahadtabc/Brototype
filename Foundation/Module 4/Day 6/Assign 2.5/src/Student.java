
public class Student {

	String name;
	String batch;
	int rollNo;
	
	Student(String name,String batch,int rollNo ){
		this.name=name;
		this.batch=batch;
		this.rollNo=rollNo;
	
	}
	
	void displayDetails() {
		System.out.println("Student Name: "+name+" | Batch :"+
	batch+" | RollNo :"+rollNo);
		
}
}