
public class SavingsAccount extends Account{
	
	double loanAmount;
	
SavingsAccount(String accHolderName,double balance,double loanAmount) {
	super(accHolderName,balance);
	
	this.loanAmount=loanAmount;
	
}
void displaySavings() {
	System.out.println("SavingsAccount Details:-");
	System.out.println("Acc Holder Name: "+accHolderName);
	System.out.println("Balance: "+balance);
	System.out.println("Loan Amount: "+loanAmount);
	System.out.println("-------------------------");
}

}
