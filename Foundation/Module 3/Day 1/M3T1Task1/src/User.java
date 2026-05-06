
public class User {
	String name,place,email;
	int age;
	long phoneNumber;
	
	//name, age, place, email, phoneNumber 
	
	User(String name, int age, String place, String email, long phoneNumber){
		this.name=name;
		this.age=age;
		this.place=place;
		this.email=email;
		this.phoneNumber=phoneNumber;
	}
	
	void displayDetails() {
		System.out.println("Name: "+name);
		System.out.println("Age: "+age);
		System.out.println("Place: "+place);
		System.out.println("Email: "+email);
		System.out.println("Phone Number: "+phoneNumber);
	}
}

