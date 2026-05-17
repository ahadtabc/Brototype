
public class Laptop {
	
	String brand;
	String processor;
	int ram;
	double price;
	
	Laptop(){
		brand="Acer";
		processor="i5";
		ram = 8;
		price =45000;
	}
	void displayProperties() {
		System.out.println("Laptop Specifications:-");
		System.out.println("Brand: "+brand);
		System.out.println("Processor: "+processor);
		System.out.println("Ram :"+ram+"GB");
		System.out.println("Price: "+price);
	}
}
