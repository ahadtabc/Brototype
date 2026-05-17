
public class User {
	String name,place;
	int age;
	
	User(){
		name="Abdul Ahad";
		place="Malappuram";
		age=29;
	}
	
	User(String name,String place,int age){
		
		this.name=name;
		this.place=place;
		this.age=age;
	}
	
	void display() {
		System.out.println("Name: "+name);
		System.out.println("Place: "+place);
		System.out.println("Age: "+age);
	}
}
