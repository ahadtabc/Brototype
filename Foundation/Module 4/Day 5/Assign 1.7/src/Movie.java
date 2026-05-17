
public class Movie {

	String name;
	double rating;
	
	Movie(){
		name="Avatar 1";
		rating=8;
	}
	
	Movie(String name){
		
		this.name=name;
	

	}
	Movie(String name,double rating){
		
		this.name=name;
		this.rating=rating;

	}
	
	void display() {
		System.out.println("Name: "+name);
		System.out.println("Ratings: "+rating+"/10");
	}
}
