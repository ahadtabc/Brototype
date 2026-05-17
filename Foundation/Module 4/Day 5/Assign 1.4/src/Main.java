/*Assignment 1.4
Setup multiple classes with properties & create their objects.
*/
public class Main {
	
	public static void main(String[] args) {
		
		Ather obj1=new Ather("Ather","Rizta Z", 150, 123,"Eletric Scooter");
		Samsung obj2=new Samsung("Samsung","Galaxy S26",75000,"Smartphone");
		Airbus obj3=new Airbus("Airbus", "A320","Passenger Plane");
		
		obj1.displayAther();
		System.err.println("---------------------------");
		obj2.displaySamsung();
		System.err.println("---------------------------");
		obj3.displayAirbus();
	}
}
