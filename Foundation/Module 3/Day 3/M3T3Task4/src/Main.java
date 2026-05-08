
public class Main {
public static void main(String[] args) {
	
	Student s1=new Student("Abdul Ahad");
	
	System.out.println("Student name: "+s1.getName());
	
	s1.setMarks(77);
	System.out.println("Marks gained: "+s1.getMarks());
	
	System.out.println("---------------------------------------");
	
	System.out.println("Student Name: "+s1.getName());
	
	s1.setMarks(110);
	
	s1.setMarks(-20);
	
	System.out.println("Current Marks: "+s1.getMarks());
	s1.setMarks(80);
	
	System.out.println("Final Marks: "+s1.getMarks());
}
}
