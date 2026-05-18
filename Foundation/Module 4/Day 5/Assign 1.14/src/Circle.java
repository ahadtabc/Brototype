
public class Circle extends Shape{

	double radius;
	
	Circle(String color,double radius){
		super(color);
		this.radius=radius;
	}
		void displayCircle() {
			displayShape();
			System.out.println("Circle Radius "+radius+"cm");
		}
}
