/*Assignment 2.1
Create method overloading using a class Messenger 
with different send() methods.
*/
public class Main {
 public static void main(String[] args) {
	
	 Messenger m1=new Messenger();
	 
	 m1.send("Elon Musk");
	 m1.send("Hi", "Good Morining");
	 m1.send(2, "Photo.jpeg");
}
}
