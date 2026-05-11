
public class Main {

	public static void main(String[] args) {
		
		Student sc1=new Student("Ahad",13);
		Student sc2=new Student("John",14);
		
		// Using setter
		sc1.setAge(18);
		sc1.display();

		System.out.println("----------------");
		
		// Using setter
		sc2.setName("Obama");
		sc2.display();
	}	
}
