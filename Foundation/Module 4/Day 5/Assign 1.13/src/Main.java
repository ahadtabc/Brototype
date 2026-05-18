/*
 Assignment 1.13
Demonstrate multilevel inheritance using Device → Mobile → SmartPhone.
*/
public class Main {
	public static void main(String[] args) {
	

	Smartphone obj1=new Smartphone("Samsung", true, "Galaxy S24", "White");
	
	Smartphone obj2=new Smartphone("Redmi", false, "Note 7 pro", "Black");
	
	obj1.displayPhoneSpec();
	System.out.println("-----------------------");
	obj2.displayPhoneSpec();
	
	}
}
