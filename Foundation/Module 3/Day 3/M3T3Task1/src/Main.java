
public class Main {

	public static void main(String[] args) {
		OnlineCourse sc1=new OnlineCourse("C plus plus", 23000);
		OfflineCourse sc2=new OfflineCourse("Flutter", 49000);
		
		
		sc1.calculatefee();
		sc2.calculatefee();
	}
}
