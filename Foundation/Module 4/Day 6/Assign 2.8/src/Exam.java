
abstract class Exam {
	
	String Subjectname;
	
	Exam(String Subjectname){
		this.Subjectname=Subjectname;
	}
	
	abstract void conductExam();

	void displaySubject() {
		System.out.println("Exam Subject name: "+Subjectname);
	}
}
