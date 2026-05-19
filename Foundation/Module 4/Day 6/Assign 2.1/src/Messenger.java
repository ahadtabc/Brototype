
public class Messenger {

	void send(String message) {
		System.out.println("Message send "+message);
	}
	
	
	void send(String name ,String message) {
		System.out.println("Message for "+name+ " : "+message);
	}
	
	void send(int size, String image ) {
		System.out.println("Image size: "+size+" MB");
		System.out.println("Image send: "+image);
		
	}
}
