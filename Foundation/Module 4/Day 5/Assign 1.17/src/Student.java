
public class Student {
	
	private String name ="Ahad";
	
	private void display() {
		System.out.println("Student name: "+name);
	}
	
	
	// public method to access private members
	public void showtoPublic() {
		display();
	}
}
