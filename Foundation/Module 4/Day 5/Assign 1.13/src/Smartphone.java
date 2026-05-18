
public class Smartphone extends Mobile{
	String modelname;
	String color;
	
	Smartphone(String brand,boolean bandSupport,
			String modelname,String color){
		
		super(brand,bandSupport);
		this.modelname=modelname;
		this.color=color;
	}
	void displayPhoneSpec() {
		displayDevice();
		display5Gsupport();
		System.out.println("Model name: "+modelname);
		System.out.println("Device Color: "+ color);
	}
}
