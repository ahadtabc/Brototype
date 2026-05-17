
public class Ather {
	String brand,modelname,category;
	int idcrange,realrange;
	
	Ather(String brand,String modelname,int idcrange,int realrange, String category){
		
		this.brand=brand;
		this.modelname=modelname;
		this.idcrange=idcrange;
		this.realrange=realrange;
		this.category=category;
	}
	
	void displayAther() {
		System.out.println("Brand: "+brand);
		System.out.println("Model Name: "+modelname);
		System.out.println("IDC Range: "+idcrange+"KM");
		System.out.println("Real Range: "+realrange+"KM");
		System.out.println("Category :"+category);
	}
}
