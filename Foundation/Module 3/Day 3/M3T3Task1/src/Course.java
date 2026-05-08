
public abstract class Course {

	String courseName;
	
	
	Course(String courseName){
		this.courseName=courseName;
		
	}		
	 // Abstract Method 
	abstract void  calculatefee();
}
