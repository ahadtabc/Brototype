
public class Student {

	private String name;
	private int marks;
	
	
	Student (String name){
		this.name=name;
		
	}
	
	
	int getMarks() {
		return marks;
	}
	
	

	String getName() {
		return name;
	}
	
	
	void setMarks(int marks){
		
		if(marks >=0 && marks <=100) {
			this.marks=marks;
			System.out.println(marks+" Marks Updated success");
		}else {
			System.out.println(marks+" Invalid Marks,please marks enter 0 to 100");
		}
	}
	
}
