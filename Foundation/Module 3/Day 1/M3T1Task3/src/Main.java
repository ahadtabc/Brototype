public class Main {
    public static void main(String[] args) {

        // Creating Objects
        Student student1 = new Student("Abdul Ahad", 101, "Computer Science");
        Employee employee1 = new Employee(5001, 45000.50, "IT Support");
        Product product1 = new Product("Laptop", 55000.99, "Electronics");
        Movie movie1 = new Movie("Intersellar", 8.8, 148);
        BankAccount account1 = new BankAccount(1234567890L, "Abdul Ahad", 25000.75);

        // Displaying Details
        student1.displayStudent();
        employee1.displayEmployee();
        product1.displayProduct();
        movie1.displayMovie();
        account1.displayBankAccount();
    }
}