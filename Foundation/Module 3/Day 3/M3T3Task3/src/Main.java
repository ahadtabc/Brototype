
public class Main {

	public static void main(String[] args) {
		
		Base objb=new Base();
		Sub objs=new Sub();
		
		
		System.out.println("Base Class represents:-");
		System.out.println(objb.nameText1);		//default
		System.out.println(objb.nameText2);		//public
		System.out.println(objb.nameText3);		//protected
		
		System.out.println("----------------------------------");
		
		System.out.println("Inertiance from sub class :-");
		objs.displayDefaultPublicProtect();
		
	}
}
