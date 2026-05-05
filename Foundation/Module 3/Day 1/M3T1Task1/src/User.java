
public class User {
    // Properties (Instance Variables)
    String name;
    int age;
    String place;
    String email;
    String phoneNumber;

    // Constructor to initialize values
    User(String name, int age, String place, String email, String phoneNumber) {
        this.name = name;
        this.age = age;
        this.place = place;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    // Method to display user details
    void displayDetails() {
        System.out.println("User Details:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Place: " + place);
        System.out.println("Email: " + email);
        System.out.println("Phone Number: " + phoneNumber);
    }
}
