
public class Base {

	//Access sepicifiers
	
		String nameText1= "Default all everywhere except to another package";
		
	public String nameText2 = "Public Access everywhere in entire program";
	
	protected String nameText3= "Available same class and also inherited class";
	
	private String nameText4="Only availabe inside that wirtten class only";
	
	 void displayPrivate() {
			System.out.println(nameText4);
	}
	
	
}
