
public class Main {
 public static void main(String[] args) {
	
	 int age =-6;
	 
	 try {
		 if(age<0) {
			 throw new InvalidAgeException("Invalid Age");
		 }
		 System.out.println("Age "+age);
	 }catch (InvalidAgeException e) {
		 System.out.println("Exception:"+e.getMessage());
	 }
}
}

