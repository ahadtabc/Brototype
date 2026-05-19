/*Assignment 2.8
Create abstract class Exam and extend it in OnlineExam
*/
public class Main {
	public static void main(String[] args) {
		OnlineExam online=new OnlineExam("Physics", "Coursera");
		
		online.displaySubject();
		online.conductExam();
	}
}
