
public class Student {

					//encapsulation
	private String name;
	private int age;
	
	
	static String school="Gems school";
	final String place="Kerala";
	
	//constructor
	public Student(String name,int age) {
		this.name=name;
		this.age=age;
		// TODO Auto-generated constructor stub
	}
	
	 // Getter for name
	public String getName() {
		return name;
	}
	
	 // Setter for name
	public void setName(String name) {
		this.name=name;
	}
	
	
	 // Getter for age
	public int getAge() {
		return age;
	}
	
	
	 // Setter for age
	public void setAge(int age) {
		if(age>0) {
		this.age=age;
	}
	}
	
	
	void display() {
		System.out.println("Name: "+name);
		System.out.println("Age: "+age);
		System.out.println("School: "+school);
		System.out.println("Place: "+place);
	}
}
