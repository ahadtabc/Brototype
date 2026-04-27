/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
	int n=5;
	for(int i=1; i<n; i++) {
		for(int j=i; j<=n; j++) {
			printf("  ");
		}
		for(int k=1; k<=i; k++) {
			printf("* ");
		}
		for(int k=1; k<i; k++) {
			printf("* ");
		}
		printf("\n");
	}

	for(int i=1; i<=n; i++) {
		for(int j=1; j<=i; j++) {
			printf("  ");
		}
		for(int k=i; k<=n; k++) {
			printf("* ");
		}
		for(int k=i; k<n; k++) {
			printf("* ");
		}
		printf("\n");
	}


	return 0;
}
