/* Polymorphism: Method Overloading + Method Overriding */

public class Main {
	public static void main(String[] args) {
		
		ReportGenerator r1=new ReportGenerator();
		
		
		// methodOverLoading
		r1.generate(50);
		r1.generate(60, "Apple");
		
		System.out.println("--------------------------");
		
		
		// referenced by parent class and child class object
		ReportGenerator p1=new PDFReportGenerator();
		
		//method Override of PDFReportGenerator self edition
		p1.generate(100);
		
		//methodOverload from parent class in the subclass
		p1.generate(123, "Orange");
	}
}
