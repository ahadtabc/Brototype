
public class Movie {
	String name;
	int rating;
	
	Movie(String name,int rating){
		this.name=name;
		this.rating=rating;
	}
	
	void display() {
		System.out.println("Movie Name: "+name);
		System.out.println("Rating: "+rating+" Stars");
	}
}
