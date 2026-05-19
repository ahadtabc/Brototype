
public class Developer extends Employee implements Login{
	
	@Override
	void work() {
		System.out.println(name+" Developing is App");
	}
	
	public void onlineLogin() {
		System.out.println(name+ " Logged as team lead");
	}

}
