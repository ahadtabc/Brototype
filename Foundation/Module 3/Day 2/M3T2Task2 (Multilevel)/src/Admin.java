
public class Admin extends Staff{

	String role;
	
Admin(String username,String department,String role){
	
	super(username,department);
	
	this.role=role;
}
	
	void display() {
		System.out.println("Details:-");
		System.out.println("Username :" +username);
		System.out.println("Dept :" +department);
		System.out.println("Role :"+role);
	}
}
