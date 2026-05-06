// public class Main {
	
// 	public static void main(String[] args) {
// 		User uc=new User(
// 				"Abdul Ahad",29,"Malappuram","ahadtabc@gmail.com",
// 				9074243208L);
// 		uc.displayDetails();
// 	}
// }

import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		
		Scanner sc= new Scanner (System.in);
		
		System.out.println("Enter the Name :");
		String name=sc.nextLine();
		
		System.out.println("Enter the Age :");
		int age=sc.nextInt();
		sc.nextLine();
		
		System.out.println("Enter the Place :");
		String place=sc.nextLine();
		
		System.out.println("Enter the Email :");
		String email=sc.nextLine();
		
		System.out.println("Enter the Phone Number :");
		long phoneNumber=sc.nextLong();
		
		
		User user1=new User(name, age, place, email, phoneNumber);
				
		System.out.println("----------------------");
		user1.displayDetails();
		sc.close();
	}

}
