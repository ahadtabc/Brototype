public class Main {
    public static void main(String[] args) {

        // Object using Default Constructor
        User uc1 = new User();

        // Object using Parameterized Constructor
        User uc2 = new User(
            "Abdul Ahad",
            29,
            "Malappuram",
            "ahadtabc@gmail.com",
            9876543210L
        );

        // Display details
        System.out.println("Default Constructor Object:");
        uc1.displayDetails();

        System.out.println("Parameterized Constructor Object:");
        uc2.displayDetails();
    }
}
