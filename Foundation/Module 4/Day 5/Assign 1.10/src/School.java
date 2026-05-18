
public class School {

	String schoolname;
	String place;
	final int code=11038;
	
	School(String schoolname,String place,int code){
		
		this.schoolname=schoolname;
		this.place=place;
	}
	
	void display() {
		System.out.println("School name is "+schoolname);
		System.out.println("Place is "+place);
		System.out.println("School Code is :"+code);
	}
}
