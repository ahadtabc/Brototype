/*Create a class Movie and use constructor to set name and rating. 
 (Practice different constructor types)*/
public class Main {
	public static void main(String[] args) {
		
		Movie obj1=new Movie();
		Movie obj2=new Movie("Bahubali 2");
		Movie obj3=new Movie("Avengers EndGame",9.9);
		
		obj1.display();
		System.out.println("--------------------");
		obj2.display();
		System.out.println("--------------------");
		obj3.display();
	}
}
