/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

void isCheck(int);
int main()
{
	int Number;
	printf("Enter a Number:\t");
	scanf("%d",&Number);
	isCheck(Number);
	return 0;
}

void isCheck(int num1) {

	if(num1%2==0) {
		printf("The Number %d is Even",num1);
	} else {
		printf("The Number %d is Odd",num1);
	}

}
