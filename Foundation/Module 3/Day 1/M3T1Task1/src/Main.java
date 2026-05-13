import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		
		Scanner sc= new Scanner (System.in);
		
		System.out.print("Enter the Name: ");
		String name=sc.nextLine();
		
		System.out.print("Enter the Age: ");
		int age=sc.nextInt();
				sc.nextLine();
		
		System.out.print("Enter the Place: ");
		String place=sc.nextLine();
		
		System.out.print("Enter the Email: ");
		String email=sc.nextLine();
		
		System.out.print("Enter the Phone Number: ");
		long phoneNumber=sc.nextLong();

		User user1=new User(name, age, place, email, phoneNumber);
				
		System.out.println("----------------------");
		user1.displayDetails();

		User user2=new User("Elon",57,"California","elon@tesla.com",123456789L);
		System.out.println("----------------------");
		user2.displayDetails();
	}
		
	}

}
