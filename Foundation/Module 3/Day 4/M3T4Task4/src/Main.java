public class Main{
	
	static void checkAge(int age) throws InvalidAge{
		if(age>0 || age<100) {
			throw new InvalidAge("Invalid Age!");
		}else {
			System.out.println("Valid Age: "+age);
		}
	}
	public static void main(String[] args) {
		
	try {
		
		checkAge(50);
		
	}catch(InvalidAge e){
		System.out.println("Exception "+e.getMessage());
	}
}
}