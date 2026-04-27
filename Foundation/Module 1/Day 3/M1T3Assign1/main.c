/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

float maxFind(float,float,float);

int main()
{
	float a,b,c,result;
	printf("Enter Three Numbers:\n");
	scanf("%f%f%f",&a,&b,&c);

	result=maxFind(a,b,c);
	printf("The Maximum Number is %.2f",result);
	return 0;
}

float maxFind(float num1,float num2,float num3) {
	float max;
	if( num1>=num2  && num1>=num3) {

		max=num1;
	} else if( num2>=num1 && num2>=num3) {

		max=num2;
	} else {

		max=num3;
	}
	return max;
}


