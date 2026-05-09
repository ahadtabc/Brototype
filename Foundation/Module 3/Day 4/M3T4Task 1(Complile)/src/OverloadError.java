
public class OverloadError {

    // Method 1
    void display(int a) {
        System.out.println(a);
    }

    // Method 2: COMPILE-TIME ERROR
    // The compiler confuse duplicate of Method 1
    int display(int a) { 
         System.out.println(a);
        return a;
    }

    public static void main(String[] args) {
        OverloadError obj = new OverloadError();
        obj.display(10);
    }
}