
public class Product {
    String name,category;
    double price;

    Product(String name, double price, String category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    void displayProduct() {
        System.out.println("Product Name: " + name);
        System.out.println("Price: " + price);
        System.out.println("Category: " + category);
        System.out.println("----------------------");
    }
}
