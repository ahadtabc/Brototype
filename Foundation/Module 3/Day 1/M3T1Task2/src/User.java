
public class User {
    // Properties
    String name;
    int age;
    String place;
    String email;
    long phoneNumber;

    // Default Constructor
    User() {
        name = "Unknown";
        age = 0;
        place = "Not Available";
        email = "Not Available";
        phoneNumber = 0;
    }

    // Parameterized Constructor
    User(String name, int age, String place, String email, long phoneNumber) {
        this.name = name;
        this.age = age;
        this.place = place;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    // Method to display details
    void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Place: " + place);
        System.out.println("Email: " + email);
        System.out.println("Phone Number: " + phoneNumber);
        System.out.println("------------------------");
    }
}