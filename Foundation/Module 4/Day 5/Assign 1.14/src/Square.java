
public class Square extends Shape{

	double height;
	double width;
	
	Square(String color,double height,double width){
		super(color);
		this.height=height;
		this.width=width;
	}
		void displaySquare() {
			displayShape();
			System.out.println("Square Height "+height+"cm | Width "+width+"cm");
		}
}

