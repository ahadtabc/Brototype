
public class Employee {
    int id;
    double salary;
    String department;

    Employee(int id, double salary, String department) {
        this.id = id;
        this.salary = salary;
        this.department = department;
    }

    void displayEmployee() {
        System.out.println("Employee ID: " + id);
        System.out.println("Salary: " + salary);
        System.out.println("Department: " + department);
        System.out.println("----------------------");
    }
}