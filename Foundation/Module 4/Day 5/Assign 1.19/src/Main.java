/*Assignment 1.19
Try static modifier — observe behavior changes in classes, 
methods & variables
*/
public class Main {
	public static void main(String[] args) {
		
		Student obj1=new Student("Ahad");
		Student obj2=new Student("Rahul");
		
		System.out.println("-- Before Update the school name --");
		obj1.display();
		obj2.display();
		
		Student.schoolname="Gems School";
		
		System.out.println("-- After Update the school name --");
		obj1.display();
		obj2.display();
		
	}
}
