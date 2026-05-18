/*Assginment 1.15
					  Animal
     (Multilevel)       |			(Hierarchical) 
               -------------------------
               |              |		  |
              Dog            Cow	      Hen
        		   | 
       		  Cat 
       
       */
public class Main {
	public static void main(String[] args) {
		
		System.out.println("--- Multilevel Inheritance ---");
		
		Cat obj1=new Cat();
		obj1.animalproperties();
		obj1.soundDog();
		obj1.soundCat();
		
		System.out.println();
		System.out.println("--- Hierarchical Inheritance ---");
		Cow obj2=new Cow();
		Hen obj3=new Hen();
		
		obj2.milk();
		System.out.println("=========================");
		obj3.egg();
	}
}
