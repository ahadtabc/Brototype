
public class Samsung {
	String brand,modelname,category;
	double price;
	
	Samsung(String brand,String modelname,int price,String category){
		
		this.brand=brand;
		this.modelname=modelname;
		this.price=price;
		this.category=category;
	}
	
	void displaySamsung() {
		System.out.println("Brand: "+brand);
		System.out.println("Model Name: "+modelname);
		System.out.println("Price: "+price+" Rupees");
		System.out.println("Category :"+category);
	}
	
}
