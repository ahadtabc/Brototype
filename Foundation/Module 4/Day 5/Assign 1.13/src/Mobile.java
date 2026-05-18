
public class Mobile extends Device{
	
	boolean bandSupport;
	
	Mobile(String brand,boolean bandSupport){
		super(brand);
		this.bandSupport=bandSupport;
		
	}
	
	void display5Gsupport() {
		if(bandSupport) {
			System.out.println("Mobile have 5G support");
		}else{
			System.out.println("Mobile have 4G only");
		}
	}
}
