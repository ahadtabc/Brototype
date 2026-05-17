
public class Airbus {
	String brand,modelname,category;
	
	Airbus(String brand,String modelname,String category){
		
		this.brand=brand;
		this.modelname=modelname;
		this.category=category;
	}
	
	void displayAirbus() {
		System.out.println("Brand: "+brand);
		System.out.println("Model Name: "+modelname);
		System.out.println("Category :"+category);
	}
	
}
