/*Assignment 1.17
Try private access modifier for classes, variables & methods 
— observe scope.
*/
public class Main {
 public static void main(String[] args) {
	
	 Student obj=new Student();
	 
	 //obj.display();			not work here because it private
	 obj.showtoPublic();
}
}
