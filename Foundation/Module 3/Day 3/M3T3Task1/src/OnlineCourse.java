
public class OnlineCourse extends Course{
	
	int fee;
	
	 OnlineCourse(String courseName,int fee) {
		 super(courseName);
		 
		this.fee=fee;
		
	}
	
	
	// Implementing abstract method (must be be written)
	void calculatefee() {
		System.out.println("Online Course : "+courseName);
		System.out.println("Course Fee: "+fee);
		System.out.println("_______________________");
	}

}
