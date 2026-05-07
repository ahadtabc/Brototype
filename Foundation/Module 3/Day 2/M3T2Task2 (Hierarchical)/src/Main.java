// =============================
// 3. HIERARCHICAL INHERITANCE
// Account -> SavingsAccount
// Account -> CurrentAccount
// =============================

public class Main {
	public static void main(String[] args) {
	

	SavingsAccount s1=new SavingsAccount("Abdul Ahad", 15000, 300000);
	CurrentAccount c1=new CurrentAccount("Abdul Ahad", 45000, 9);

	s1.displaySavings();
	c1.displayCurrent();
	
	
}
}

