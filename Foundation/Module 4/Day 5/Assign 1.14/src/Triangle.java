
public class Triangle extends Shape{

	double height;
	double angle;
	
	Triangle(String color,double height,double angle){
		super(color);
		this.height=height;
		this.angle=angle;
	}
		void displayTriangle() {
			displayShape();
			System.out.println("Triangle Height "+height+"cm | Angle "+angle+" degree");
		}
}
