
public class User {
    // Properties
    String name,place,email;
    int age;
    long phoneNumber;

    // Default Constructor
    User() {
        name = "Elon Musk";
        age = 55;
        place = "California";
        email = "elon@tesla.com";
        phoneNumber = 9847573839L;
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
