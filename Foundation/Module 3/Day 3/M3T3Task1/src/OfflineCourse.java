
public class OfflineCourse extends Course{

	int fee;
	
	 OfflineCourse(String courseName,int fee) {
		super(courseName);
		this.fee=fee;
	 }// TODO Auto-generated constructor stub
		
		void calculatefee() {
			System.out.println();
			System.out.println("Offline Course: "+courseName);
			System.out.println("Course fee: "+fee);
	}
}
