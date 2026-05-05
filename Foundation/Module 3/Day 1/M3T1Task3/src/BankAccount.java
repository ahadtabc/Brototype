
public class BankAccount {
    long accNo;
    String holderName;
    double balance;

    BankAccount(long accNo, String holderName, double balance) {
        this.accNo = accNo;
        this.holderName = holderName;
        this.balance = balance;
    }

    void displayBankAccount() {
        System.out.println("Account Number: " + accNo);
        System.out.println("Holder Name: " + holderName);
        System.out.println("Balance: " + balance);
        System.out.println("----------------------");
    }
}