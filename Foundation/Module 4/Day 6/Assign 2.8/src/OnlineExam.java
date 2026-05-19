
public class OnlineExam extends Exam {
	
	String platform;
	
	public OnlineExam(String Subjectname,String platform) {
		super(Subjectname);
		
		this.platform=platform;
		
		// TODO Auto-generated constructor stub
	}
	
	@Override
	void conductExam() {
		System.out.println("Opening the Browser...Loading "+Subjectname+" on "+platform);
		System.out.println("Don't close or refresh browser tab,Exam is Started..");
	}

}
