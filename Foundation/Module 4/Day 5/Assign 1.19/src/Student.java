
public class Student {
	String name;
	
	static String schoolname= "IKTHSS"; 
	
	Student(String name){
	this.name=name;
	}
	
	void display() {
		System.out.println(name+" studies in "+schoolname);
	}
}
