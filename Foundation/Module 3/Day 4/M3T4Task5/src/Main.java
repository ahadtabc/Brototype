
public class Main {


	public static void main(String arg[]) {
		
		Student sc1=new Student("Ahad",16);
		Student sc2=new Student("Ramu",17);
		
		sc1.display();
		
		sc2.display();
		
		Student.school= "Gems School";
		
		System.out.println("---------------------------------");
		System.out.println("After the static variable changed");
		sc1.display();
		sc2.display();
	}
}
