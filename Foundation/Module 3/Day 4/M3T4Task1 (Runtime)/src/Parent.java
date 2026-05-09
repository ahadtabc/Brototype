public class Parent {

    void displayCalc(int a, int b) {
        System.out.println("Sum: " +(a + b));

    }
}

class Child extends Parent{
	
	@Override
	void displayCalc(int a,int b) {
		System.out.println("Divid Result is: "+(a/b));
	}
}

public class RuntimeError{
	
	public static void main(String[] args) {
		Parent obj=new Child();
		
		obj.displayCalc(10, 0);;
	}
}

//class Child extends Parent {
//
//    @Override
//    void calculate(int a, int b) {
//// Syntactically correct, but logically dangerous
//    System.out.println("Result: " + (a / b)); 
//
//    }
//}
//
//
//public class OverrideRuntime {
//
//public static void main(String[] args) {
//    Parent obj = new Child(); // Upcasting
//
//        
//
//        // This compiles perfectly because the Parent has a calculate method.
//
//        // However, at RUNTIME, the Child's version is called.
//
//        obj.calculate(10, 0); 
//
//    }
//
//}