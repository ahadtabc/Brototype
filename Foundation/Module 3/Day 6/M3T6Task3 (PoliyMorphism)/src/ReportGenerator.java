
public class ReportGenerator {


    // Method Overloading (same method, different parameters)
	
	public void generate(int id) {
		
		System.out.println("Report Generate with ID only : "+id);
	}
	
	 // Method Overloading (same method, different parameters)
	public void generate(int id,String format) {
		System.out.println("same Report Generate with ID : "+id);
		System.out.println("same Report Generate Format : " +format);
	}
}
