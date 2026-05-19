// for final method
public class Laptop {


    final void show() {
        System.out.println("Battery Low");
    }
}

class Internet extends Laptop {

    // Cannot override final method

    /*
    void show() {
        System.out.println("Laptop not connect internet");
    }
    */
}


