
public class CurrentAccount extends Account{

	double loanInterest;

public CurrentAccount(String accHolderName,double balance,double loanInterest)  {

	super(accHolderName,balance);
	this.loanInterest=loanInterest;
}

void displayCurrent() {
	System.out.println("CurrentAccount Details:-");
	System.out.println("Acc Holder Name: "+accHolderName);
	System.out.println("Balance: "+balance);
	System.out.println("Loan Interest: "+loanInterest+ "%");
	System.out.println("-------------------------");
}

}
